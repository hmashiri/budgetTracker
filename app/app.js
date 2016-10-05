var app = angular.module( "myApp", [] );


app.controller( 'MainController', ['$scope', function( $scope )
{

$scope.incomeItems = [];
$scope.expenseItems = [];


$scope.addIncomeItems = function()
{
 	$scope.incomeItems.push(
 	{
 		"description": $scope.incomeDescriptionInput,
		"amount": $scope.incomeAmountInput
 	});

	$scope.incomeDescriptionInput = null;
 	$scope.incomeAmountInput = null;
};


$scope.addExpenseItems = function()
{
 	$scope.expenseItems.push(
 	{
 		"description": $scope.expenseDescriptionInput,
		"amount": $scope.expenseAmountInput
 	});

	$scope.expenseDescriptionInput = null;
 	$scope.expenseAmountInput = null;
};
	

$scope.removeIncome = function( todo )
{
	var index = $scope.incomeItems.indexOf( todo );
	$scope.incomeItems.splice( index, 1 );
};


$scope.removeExpense = function ( todo ) 
{
	var index = $scope.expenseItems.indexOf( todo );
	$scope.expenseItems.splice( index, 1 );
};

$scope.totalIncome = function ()
{
	var total = 0;
	for (var i = 0; i < $scope.incomeItems.length; i++ )
	{
		total += parseInt( $scope.incomeItems[i].amount ); 
	}	
	return total;
};

$scope.totalExpense = function ()
{
	var total = 0;
	for (var i = 0; i < $scope.expenseItems.length; i++ )
	{
		total += parseInt( $scope.expenseItems[i].amount ); 
	}	
	return total;
};	

}]);





