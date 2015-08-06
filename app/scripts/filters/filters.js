'use strict';

/**
 * @ngdoc overview
 * @name whApp
 * @description
 * # whApp
 *
 * Main module of the application.
 */
angular
	.module('whApp')
.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    };
});