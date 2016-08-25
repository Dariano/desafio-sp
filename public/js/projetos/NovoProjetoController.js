angular
	.module('desafio')
	.controller('NovoProjetoController', function(Projeto, $rootScope, $state){
		this.salva = function (nome) {
			Projeto
				.salva( { nome: nome })
				.success(function (projeto) {
					// Dispara um evendo para atualizar a lista de projeto e redirencionar para as tarefas.
					console.log('NovoProjetoController',  projeto);
					$rootScope.$emit('projeto.novo', projeto);
					$state.go('projetos.tarefas', { _id: projeto._id });
				})
				.error(function (erro) {
					console.log(erro);
				});
		}
	});