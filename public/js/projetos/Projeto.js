angular
    .module('desafio')
    .factory('Projeto', function($http){
        var servico = {
            todos: function () {
                return $http.get('/api/projetos');
            },
            busca: function (id) {
                return $http.get('/api/projetos/' + id, { cached: true });
            },
            salva: function (projeto) {
                return $http.post('/api/projetos/', projeto);
            },
            remove: function (id) {
                return $http.delete('/api/projetos/' + id);
            }
        };

        return servico;
    });