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
                .success(atualizaTarefas)
                .error(notifica);
        };

        me.altera = function (tarefa) {
            // valida se a tarefa foi concluida, está atrazada ou está no prazo
            console.log(tarefa);
            const statusAtualizado = tarefa.concluida ? 'concluida' : 'normal';
            Tarefa
                .altera($stateParams.id, tarefa._id, { status: statusAtualizado})
                .success(atualizaTarefas)
                .error(notifica);
        }

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

        function atualizaTarefas(projeto) {
            me.todas = projeto.tarefas;
            me.nova = false;
        }

        function tarefaBuild(textoTarefa) {
            var tarefa = {};
            tarefa.descricao = trim(textoTarefa.split(',')[0]);
            tarefa.dono = trim(textoTarefa.split(',')[1]);
            tarefa.vencimentoFormatado = trim(textoTarefa.split(',')[2]);
            tarefa.dataVencimento = trim(textoTarefa.split(',')[2]);

            return tarefa;
        }

        function trim(str) {
            return str.replace(/^\s+|\s+$/g, "");
        }
    });