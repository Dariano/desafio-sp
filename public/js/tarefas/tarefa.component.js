(function () {
    'use strict';

    angular
        .module('desafio')
        .component('novaTarefa', {
            bindings: {
                tarefa: '<'
            },
            controller: tarefaController,
            templateUrl: './partials/tarefas/tarefa-nova.html'
        });

    tarefaController.$inject = ['Tarefa', '$stateParams', '$rootScope', 'moment'];

    function tarefaController(Tarefa, $stateParams, $rootScope, moment) {
        var vm = this;

        vm.$onInit = init();

        vm.salva = function (novaTarefa, $event) {
            if ($event.which != 13) return;

            if (!novaTarefa) return;

            var tarefa = tarefaBuild(novaTarefa);
            var projetoId = $stateParams.id;

            if (!projetoId) return;

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
            tarefa.dataVencimento = !data ? moment().toDate() : formataData(data); //TODO: Validar e novificar

            return tarefa;
        }

        function trim(str) {
            return str.replace(/^\s+|\s+$/g, "");
        }

        function formataData(texto) {
            //TODO: Validar e novificar
            var hoje = new Date();
            var dia = texto.split('/')[0];
            var mes = texto.split('/')[1] - 1; // No Date os meses são de 0 - 11

            if (dia && mes) {
                return moment(hoje.getUTCFullYear(), parseInt(mes), parseInt(dia)).toDate();
            }
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

} ());