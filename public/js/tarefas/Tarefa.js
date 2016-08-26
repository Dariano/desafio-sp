angular
    .module('desafio')
    .factory('Tarefa', function($http){
        var servico = {
            todos: function (idProjeto) {
                return $http.get('/projetos' + idProjeto + '/tarefas/');
            },
            busca: function (idProjeto, idTarefa) {
                return $http.get('/projetos/' + idProjeto + '/tarefas/' + idTarefa);
            },
            salva: function (idProjeto, tarefa) {
                return $http.post('/projetos/' + idProjeto + '/tarefas/', tarefa);
            },
            remove: function (id) {
                return $http.delete('/projetos/' + idProjeto + '/tarefas/' + idTarefa);
            },
            altera: function (idProjeto, idTarefa, tarefa) {
                return $http.put('/projetos/' + idProjeto + '/tarefas/' + idTarefa, tarefa);
            }
        };

        return servico;
    });