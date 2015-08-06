'use strict';

/**
 * @ngdoc function
 * @name cakeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cakeApp
 */


angular.module('whApp')
  .controller('GalleryIdCtrl', function ($scope, $routeParams, Watches) {
    $scope.id = $routeParams.id;

	$scope.watches = Watches.watches();

	
	if ($scope.id < $scope.watches.length)
		{
			$scope.nextSlide = parseInt($scope.id) + 1;
		}
	else
		{
			$scope.nextSlide = 1;
		}

	if ($scope.id > 1)
		{
			$scope.prevSlide = parseInt($scope.id) - 1;
		}
	else
		{
			$scope.prevSlide = $scope.watches.length;
		}

	$scope.watch = $scope.watches.filter(function(value){
		return (value.id === $scope.id);
	})[0];
	$scope.mainImageUrl = $scope.watch.src[0];

	$scope.setImage = function (imageUrl) {
		$scope.mainImageUrl = imageUrl;
	};


   });
