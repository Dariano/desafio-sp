angular
    .module('desafio')
    .controller('TarefaController', function($state, $rootScope, $stateParams, Projeto, Tarefa) {

        var me = this;

        buscaProjetos($stateParams.id);

        me.altera = function (tarefa) {
            Tarefa
                .altera($stateParams.id, tarefa._id, { concluida: tarefa.concluida })
                .success(function (tarefa) {
                    notificaAlteracao();
                })
                .error(notifica);
        };

        me.dataFormatada = function (data) {
            var dataConvetida = moment(data);
            if(!dataConvetida.isValid()) return;

            return dataConvetida.format('DD/MM');
        };

        me.isAtrazada = function (data) {
            var dataConvetida = moment(data);
            if(!dataConvetida.isValid()) return false;

            return dataConvetida.diff(moment(), 'days') < 0;
        };

        $rootScope.$on('tarefa.nova', function(e, tarefa){
             me.todas.push(tarefa);
        });

        ///////////////////////////////////////////

        function buscaProjetos(idProjeto) {
            Projeto
                .busca(idProjeto)
                .success(carregaTarefas)
                .error(notifica);
        }

        function carregaTarefas(projeto) {
            me.todas = projeto.tarefas;
        }

        function notifica(erro) {
            console.log(erro);
        }

        function formataData(texto) {
            //TODO: Validar e novificar
            var hoje = new Date();
            var dia = texto.split('/')[0];
            var mes = texto.split('/')[1] - 1; // No Date os meses são de 0 - 11

            if(dia && mes) {
                return new Date(hoje.getUTCFullYear(), parseInt(mes), parseInt(dia));
            }
        }

        function notificaAlteracao() {
            $rootScope.$broadcast('tarefa.alterada', me.todas);
        }
    });