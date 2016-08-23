'use strict';

/* global angular */
var app = angular.module('mean', ['ngRoute', 'ui.bootstrap', 'dialogs.main']);

app.config(function($routeProvider) {
	$routeProvider.when('/projetos', {
			templateUrl: 'partials/projetos.html',
			controller: 'projetosController'
		})
		.otherwise({
			redirectTo: '/index.html'
		});
});