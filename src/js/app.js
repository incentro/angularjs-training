angular
	.module('incentro', [])
	.controller('incentroController', IncentroController);


function IncentroController($scope) {
	$scope.products = [
		{name: 'Sinaasappels', quantity: 25, status: 'vers'},
		{name: 'Appels', quantity: 50, status: 'vers'},
		{name: 'Citroenen', quantity: 5, status: 'over datum'},
		{name: 'Mandarijnen', quantity: 15, status: 'vers'},
		{name: 'Bananen', quantity: 31, status: 'vers'}
	];
}