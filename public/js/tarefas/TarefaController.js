angular
    .module('desafio')
    .controller('TarefaController', function($state, $rootScope, $stateParams, Projeto, Tarefa) {

        var me = this;

        buscaProjetos($stateParams.id);

        me.salva = function(novaTarefa) {

            if (!novaTarefa) return;

            var tarefa = tarefaBuild(novaTarefa);

            Tarefa
                .salva($stateParams.id, tarefa)
                .success(adicionaTarefas)
                .error(notifica);
        };

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
            console.log(dataConvetida < moment())
            return dataConvetida < moment();
        };

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

        function adicionaTarefas(tarefa) {
            me.todas.push(tarefa);
            me.nova = false;
        }

        function tarefaBuild(textoTarefa) {
            var tarefa = {};
            tarefa.descricao = trim(textoTarefa.split(',')[0]);
            tarefa.dono = trim(textoTarefa.split(',')[1]);
            tarefa.vencimentoFormatado = trim(textoTarefa.split(',')[2]);
            
            var data = trim(textoTarefa.split(',')[2]);
            tarefa.dataVencimento = !data ? new Date() : formataData(data);

            return tarefa;
        }

        function trim(str) {
            return str.replace(/^\s+|\s+$/g, "");
        }

        function formataData(texto) {
            var hoje = new Date();
            var dia = texto.split('/')[0];
            var mes = texto.split('/')[1];

            if(dia && mes) {
                return new Date(hoje.getUTCFullYear(), parseInt(mes), parseInt(dia));
            }
        }

        function notificaAlteracao() {
            $rootScope.$broadcast('tarefa.alterada', me.todas);
        }
    });