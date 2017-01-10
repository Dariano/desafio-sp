angular
    .module('desafio')
    .factory('Tarefa', function($http){
        var servico = {
            todos: function (idProjeto) {
                return $http.get('/api/projetos' + idProjeto + '/tarefas/');
            },
            busca: function (idProjeto, idTarefa) {
                return $http.get('/api/projetos/' + idProjeto + '/tarefas/' + idTarefa);
            },
            salva: function (idProjeto, tarefa) {
                return $http.post('/api/projetos/' + idProjeto + '/tarefas/', tarefa);
            },
            remove: function (id) {
                return $http.delete('/api/projetos/' + idProjeto + '/tarefas/' + idTarefa);
            },
            altera: function (idProjeto, idTarefa, tarefa) {
                return $http.put('/api/projetos/' + idProjeto + '/tarefas/' + idTarefa, tarefa);
            }
        };

        return servico;
    });