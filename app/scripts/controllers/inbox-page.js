'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('consultApp')
	.controller('InboxPageCtrl', function($scope, $state, $http) {

		console.log("Inbox");

		var editor; // use a global for the submit and return data rendering in the examples

		$(document).ready(function() {
			editor = new $.fn.dataTable.Editor({
				// ajax: "../php/staff.php",
				table: "#example",
				idSrc:  'Name',
				fields: [{
					label: "Name:",
					name: "Name"
				}, {
					label: "Position:",
					name: "position"
				}, {
					label: "Office:",
					name: "office"
				}, {
					label: "Extension:",
					name: "extn"
				}, {
					label: "Start date:",
					name: "start_date",
					type: "datetime"
				}, {
					label: "Salary:",
					name: "salary"
				}]
			});

			$('#example').DataTable({
				dom: "Bfrtip",
				// ajax: "../php/staff.php",
				columns: [{
					data: "Name"
				}, {
					data: "position"
				}, {
					data: "office"
				}, {
					data: "extn"
				}, {
					data: "start_date"
				}, {
					data: "salary",
					render: $.fn.dataTable.render.number(',', '.', 0, '$')
				}],
				select: true,
				buttons: [{
					extend: "create",
					editor: editor
				}, {
					extend: "edit",
					editor: editor
				}, {
					extend: "remove",
					editor: editor
				}]
			});
		});



	});