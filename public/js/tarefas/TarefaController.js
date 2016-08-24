angular
    .module('desafio')
    .controller('TarefaController', [function () {
        this.projeto = { nome: 'Projeto 1'};
        this.lista = [
            {
                descricao: 'Ler as especificações',
                dono: 'Dariano',
                vencimentoFormatado: '8/10',
                status: '1'
            },
            {
                descricao: 'Preparar o backlog',
                dono: 'Dariano',
                vencimentoFormatado: '8/9',
                status: '2'
            },
        ];
    }]);