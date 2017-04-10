'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('consultApp')
	.controller('OutboxPageCtrl', function($scope, $state, $http) {

		console.log("Outbox");

		$(document).ready(function() {
			$('#example').DataTable();
		});

	});