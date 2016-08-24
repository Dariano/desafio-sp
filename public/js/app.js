'use strict';

/* global angular */
var app = angular.module('desafio', ['ngRoute', 'ui.bootstrap', 'dialogs.main']);

app.config(function($routeProvider) {
	$routeProvider.when('/projetos', {
			templateUrl: 'partials/projetos/projetos.html',
			controller: 'ProjetoController'
		})
		.otherwise({
			redirectTo: '/index.html'
		});
});