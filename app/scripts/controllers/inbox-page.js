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
				idSrc: 'Name',
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
					label: "Age:",
					name: "age"
				}, {
					label: "Start date:",
					name: "start_date",
					type: "datetime"
				}, {
					label: "Salary:",
					name: "salary"
				}]
			});

			var table = $('#example').DataTable({
				dom: "Bfrtip",
				// ajax: "../php/staff.php",
				columns: [{
					orderable: false,
					className: 'select-checkbox',
					targets: 0
				}, {
					data: "Name"
				}, {
					data: "position"
				}, {
					data: "office"
				}, {
					data: "age"
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
				}, {
					text: 'MYOWNBUTTON',
					action: function() {
						var count = table.rows({
							selected: true
						}).count();

						console.log(count);

						events.prepend('<div>' + count + ' row(s) selected</div>');
					}
				}],
				fnRowCallback: function(nRow, aData, iDisplayIndex) {
					if (aData.age > 40) {
						$(nRow).addClass('gradeN');
					}
				},
				select: {
					style: 'multi',
					selector: 'td:first-child'
				}
			});



		});



	});