angular
	.module('desafio')
	.controller('NovoProjetoController', function (Projeto, $rootScope, $state) {

		var vm = this;
		vm.status;

		vm.salva = function (nome) {
			// if (event.which != 13) return;

			if (!nome) return;

			Projeto
				.salva({ nome: nome })
				.success(notifica)
				.error(mostra);
		};

		vm.validacao = function (nome) {
			console.log('nome', nome);

			return false;
		};

		///////////////////////////////////

		function notifica(projeto) {
			$rootScope.$emit('projeto.novo', projeto);
			$state.go('projetos.tarefas', {
				id: projeto._id
			});
		}

		function mostra(erro) {
			vm.status = 'Erro!';
		}

	});