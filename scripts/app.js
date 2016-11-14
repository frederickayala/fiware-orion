'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngMaterial',
    'ui.router',
    'ui.utils',
    'angular-loading-bar',
    'ngMdIcons',
    'app.services',
    'chart.js'
  ]);