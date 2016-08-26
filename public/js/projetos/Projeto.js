angular
    .module('desafio')
    .factory('Projeto', function($http){
        var servico = {
            todos: function () {
                return $http.get('/projetos');
            },
            busca: function (id) {
                return $http.get('/projetos/' + id, { cached: true });
            },
            salva: function (projeto) {
                return $http.post('/projetos/', projeto);
            },
            remove: function (id) {
                return $http.delete('/projetos/' + id);
            }
        };

        return servico;
    });