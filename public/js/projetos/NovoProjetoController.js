angular
	.module('desafio')
	.controller('NovoProjetoController', function(Projeto, $rootScope, $state) {

		this.salva = function(nome) {
			if(event.which != 13) return;
			
			if(!nome) return;

			Projeto
				.salva({ nome: nome })
				.success(notifica)
				.error(mostra);
		};

		///////////////////////////////////

		function notifica(projeto) {
			$rootScope.$emit('projeto.novo', projeto);
			$state.go('projetos.tarefas', {
				id: projeto._id
			});
		}

		function mostra(erro) {
			console.log(erro);
		}
	});