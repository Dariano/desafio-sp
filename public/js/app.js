'use strict';

/* global angular */
var app = angular.module('desafio', ['ui.router', 'ui.bootstrap', 'dialogs.main', 'angularValidator', 'angularMoment']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/projetos");

    $stateProvider
        .state('projetos', {
            url: "/projetos",
            templateUrl: '/partials/projetos/projetos.html',
            controller: 'ProjetoController',
            controllerAs: 'projeto'
        })
        .state('projetos.novo', {
        	url: "/novo",
        	templateUrl: '/partials/projetos/projeto-novo.html',
            controller: 'NovoProjetoController',
            controllerAs: 'projeto',
            onEnter: function(){
              console.log("projetos.novo");
            }
        })
        .state('projetos.tarefas', {
            url: "/:id",
            templateUrl: '/partials/tarefas/tarefas.html',
            controller: 'TarefaController',
            controllerAs: 'tarefa'
        })
        .state('projetos.tarefas.nova', {
            url: "/nova-tarefa",
            templateUrl: '/partials/tarefas/tarefa-nova.html',
            controller: 'TarefaController',
            controllerAs: 'tarefa'
        });

});