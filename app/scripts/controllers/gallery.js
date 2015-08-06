'use strict';

/**
 * @ngdoc function
 * @name cakeApp.controller:ExamplesCtrl
 * @description
 * # ExamplesCtrl
 * Controller of the cakeApp
 */
angular.module('whApp')
.controller('GalleryCtrl', ['$scope', 'Watches', 'filterFilter',
  function ($scope, Watches, filterFilter) {
  	$scope.watchesList = Watches.watches();
  	$scope.currentPage = 1;
  	$scope.orderProp = '-id';
   	$scope.reverse = true;
  	$scope.entryLimit = 12;
	$scope.$watch('query', function(term) {
		var pagination = document.getElementById('pagination');
		var absence = document.getElementById('absence');
		$scope.watches = filterFilter($scope.watchesList, term);
		$scope.noOfPages = $scope.watches.length;
		if (!$scope.noOfPages) {
			pagination.style.display = 'none';
			absence.style.display = 'block';
		}
		else {
			pagination.style.display = 'block';
			absence.style.display = 'none';
		}
    });
    }]);


