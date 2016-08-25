'use strict';

/* global angular */
var app = angular.module('desafio', ['ui.router', 'ui.bootstrap', 'dialogs.main']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/projetos");

    $stateProvider
        .state('projetos', {
            url: "/projetos",
            templateUrl: 'partials/projetos/projetos.html',
            controller: 'ProjetoController',
            controllerAs: 'projeto'
        })
        .state('tarefas', {            
            url: '/tarefas',
            templateUrl: 'partials/tarefas/tarefas.html',
            onEnter: function(){
              console.log("tarefas");
            }
        })
        .state('projetos.tarefas.nova', {
            url: '/tarefas/nova',
            views: {
                'tarefa': {

            templateUrl: 'partials/tarefas/tarefa-nova.html',
            onEnter: function(){
              console.log("tarefas.nova");
            }
                }
            }
        });

});