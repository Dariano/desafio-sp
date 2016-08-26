angular
    .module('desafio')
    .controller('ProjetoController', function (Projeto, $state, $rootScope) {

        var me = this;
        me.todos = [];
        me.temProjetos = false;
        buscaTodosProjetos();

        this.salva = function (projeto) {
            if(!projeto) return;

            Projeto
                .salva(projeto)
                .success(adiciona)
                .error(erro);
        };

        $rootScope.$on('projeto.novo', function (e, projeto) {
            adiciona(projeto);
        });

        $rootScope.$on('projeto.removido', function (e, projeto) {
            me.todos = me.todos.filter(function (p) {
            	return p._id != projeto._id;
            });

            mostra(me.todos);
        });

        ////////////////////////////////

        function adiciona(projeto) {
            me.todos.push(projeto);
        }

        function buscaTodosProjetos() {
            Projeto
                .todos()
                .success(mostra)
                .error(erro);
        }

        function mostra(projetos) {
            me.temProjetos = tem(projetos);

            if(me.temProjetos){
                me.todos = projetos;
                $state.go('projetos.tarefas', { id: projetos[0]._id });
                return;
            }

            $state.go('projetos.novo');
        }

        function tem(projetos) {
            return !!projetos && projetos.length > 0;
        }

        function erro(erro) {
            console.log(erro);
        }
    });
