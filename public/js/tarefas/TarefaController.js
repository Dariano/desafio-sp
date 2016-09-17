angular
    .module('desafio')
    .controller('TarefaController', function($state, $rootScope, $stateParams, Projeto, Tarefa) {

        var me = this;

        buscaProjetos($stateParams.id);

        me.salva = function(event, novaTarefa) {
            if(event.which != 13) return;

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

            return dataConvetida.diff(moment(), 'days') < 0;
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
            notificaAlteracao();
        }

        function tarefaBuild(textoTarefa) {
            var tarefa = {};
            var descricao = textoTarefa.split(',')[0];
            tarefa.descricao =trim(descricao); //TODO: Validar e novificar

            var dono = textoTarefa.split(',')[1];
            tarefa.dono = !dono && me.todas ? me.todas[0].dono : dono; //TODO: Validar e novificar
            
            var data = textoTarefa.split(',')[2];            
            tarefa.dataVencimento = !data ? new Date() : formataData(data); //TODO: Validar e novificar

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

            if(dia && mes) {
                return new Date(hoje.getUTCFullYear(), parseInt(mes), parseInt(dia));
            }
        }

        function notificaAlteracao() {
            $rootScope.$broadcast('tarefa.alterada', me.todas);
        }
    });