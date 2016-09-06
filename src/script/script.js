// script.js
 
// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'../../build/home.html',
		controller:'mainController'
	})
	.when('/about',{
		templateUrl:'../../build/about.html',
		controller:'aboutController'
	})
	.when('/contact',{
		templateUrl:'../../build/contact.html',
		controller:'contactController'
	})
})
 
// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
 
    // create a message to display in our view
    $scope.message = '我是主要的页面!';
});

scotchApp.controller('aboutController', function($scope) {
 
    // create a message to display in our view
    $scope.message = '关于我们的页面!';
});

scotchApp.controller('contactController', function($scope) {
 
    // create a message to display in our view
    $scope.message = '最后一个页面!';
});