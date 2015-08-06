
'use strict';

/**
 * @ngdoc overview
 * @name cakeApp
 * @description
 * # cakeApp
 *
 * Main module of the application.
 */
angular
  .module('whApp', [
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'ngAnimate',
    'ngRoute',
    'angular-carousel',
    'ngTouch'
  ])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/mainpage.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
      })
      .when('/gallery/:id', {
        templateUrl: 'views/galleryInd.html',
        controller: 'GalleryIdCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
  }]);
