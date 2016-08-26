angular
	.module('desafio')
	.controller('ProjetoDetalhesController', function($rootScope, $state, $stateParams, Projeto, dialogs) {
		var me = this;
		me.tarefas = {
			concluidas: 0,
			atrasadas: 0,
			total: 0
		};

		carregarProjeto($stateParams.id);

		me.remove = function(projeto) {

			var resposta = dialogs.confirm('Remover', 'Deseja remover o Projeto e suas dependências?', {
				size: 'sm'
			})

			resposta
				.result
				.then(function(btn) {
					Projeto
						.remove(projeto._id)
						.success(notificaRemocao(projeto))
						.error(notifica);
				});
		};

		$rootScope.$on('tarefa.alterada', function (e, tarefas) {
			calculaTarefas(tarefas);
		});

		/////////////////////////////////////

		function carregarProjeto(idProjeto) {
			Projeto
				.busca(idProjeto)
				.success(atualiza)
				.error(notifica);
		}

		function atualiza(projeto) {
			me.projeto = projeto;
			calculaTarefas(projeto.tarefas);
		}

		function notificaRemocao(projeto) {
			return function() {
				$state.go('projetos');
				$rootScope.$broadcast('projeto.removido', projeto);
			}
		}

		function notifica(erro) {
			console.log(erro);
		}

		function calculaTarefas(tarefas) {
			me.tarefas.concluidas = tarefas.filter(concluidas).length;
			me.tarefas.atrasadas = tarefas.filter(atrazada).length;
			me.tarefas.total = tarefas.length;
		}

		function concluidas(tarefa) {
			return tarefa.concluida;
		}

		function atrazada(tarefa) {
			return tarefa.dataVencimento < moment();
		}
	});