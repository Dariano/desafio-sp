angular
	.module('desafio')
	.controller('ProjetoDetalhesController', function($rootScope, $state, $stateParams, Projeto, dialogs) {
		var me = this;

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

		/////////////////////////////////////

		function carregarProjeto(idProjeto) {
			Projeto
				.busca(idProjeto)
				.success(atualiza)
				.error(notifica);
		}

		function atualiza(projeto) {
			me.projeto = projeto;
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
	});