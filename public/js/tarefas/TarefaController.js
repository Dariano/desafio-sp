angular
    .module('desafio')
    .controller('TarefaController', function($state, $rootScope) {
        this.projeto = {
            nome: 'Projeto 1'
        };
        this.lista = [{
            descricao: 'Ler as especificações',
            dono: 'Dariano',
            vencimentoFormatado: '8/10',
            status: 'concluida',
            concluida: true
        }, {
            descricao: 'Preparar o backlog',
            dono: 'Dariano',
            vencimentoFormatado: '8/9',
            status: 'atrazada',
            concluida: false
        }];

        this.salva = function(novaTarefa) {
            
            if(!novaTarefa) return;

            var tarefa = tarefaBuild(novaTarefa);
            
            this.lista.push(tarefa);
            this.nova = false;
        }

        $rootScope.$on('projeto.atualizado', function (e, projeto) {
            console.log('projeto.atualizado', projeto);
            this.projeto = projeto;
        });

        function tarefaBuild(textoTarefa) {
            var tarefa = {};
            tarefa.descricao = textoTarefa.split(',')[0];
            tarefa.dono = textoTarefa.split(',')[1];
            tarefa.vencimentoFormatado = textoTarefa.split(',')[2];

            return tarefa; 
        }
    });