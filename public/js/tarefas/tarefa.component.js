(function () {
    'use strict';

    angular
        .module('desafio')
        .component('novaTarefa', tarefa());

    function tarefa() {

        return {
            bindings: {
            },
            controller: ['Tarefa', '$stateParams', '$rootScope', tarefaController],
            templateUrl: './partials/tarefas/tarefa-nova.html'
        };


        function tarefaController(Tarefa, $stateParams, $rootScope) {
            var vm = this;

            init();

            vm.salva = function (novaTarefa, $event) {
               

                if ($event.which != 13) return;

                if (!novaTarefa) return;

                var tarefa = tarefaBuild(novaTarefa);
                var projetoId = $stateParams.id;

                Tarefa
                    .salva(projetoId, tarefa)
                    .success(adicionaTarefas)
                    .error(notifica);
            };

            function init() {
                
            }

            function tarefaBuild(textoTarefa) {
                var tarefa = {};
                var dadosDaTarefa = textoTarefa.split(',');
                var descricao = dadosDaTarefa[0];
                tarefa.descricao = trim(descricao); //TODO: Validar e novificar

                var dono = dadosDaTarefa[1];
                tarefa.dono = dono; // me.todas.lenght > 0 ? me.todas[0].dono : dono; //TODO: Validar e novificar

                var data = dadosDaTarefa[2];
                tarefa.dataVencimento = !data ? new Date() : formataData(data); //TODO: Validar e novificar

                return tarefa;
            }

            function trim(str) {
                return str.replace(/^\s+|\s+$/g, "");
            }

            function adicionaTarefas(tarefa) {
                vm.nova = false;
                $rootScope.$emit('tarefa.nova', tarefa);
            }

            function notifica(erro) {
                vm.status = "Erro!"
                console.log(erro);
            }
        }
    }

} ());