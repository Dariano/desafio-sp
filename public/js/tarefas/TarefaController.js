angular
    .module('desafio')
    .controller('TarefaController', [function($state) {
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
        }, ];


        this.nova = function() {
            console.log('oi');
            $state.go('projeto.nova');
        }
    }]);