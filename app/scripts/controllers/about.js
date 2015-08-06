'use strict';

/**
 * @ngdoc function
 * @name whApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the whApp
 */
angular.module('whApp')
  .controller('AboutCtrl',['$scope','$location', function ($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
    $scope.routecheck = function (string) {
    	return	$location.path().includes(string);
    };
  }]);
