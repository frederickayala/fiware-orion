'use strict';

/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
angular.module('app')
  .run(
    [           '$rootScope', '$state', '$stateParams',
      function ( $rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ( $stateProvider,   $urlRouterProvider) {
        $urlRouterProvider
          .otherwise('/app/sensor');
        $stateProvider
          .state('app', {
            abstract: true,
            url: '/app',
            views: {
              '': {
                templateUrl: 'views/layout.html'
              },
              'aside': {
                templateUrl: 'views/aside.html'
              },
              'content': {
                templateUrl: 'views/content.html'
              }
            }
          })          

          .state('app.sensor', {
              url: '/sensor',
              templateUrl: 'views/pages/sensor.html',
              data : { title: 'Gyro to Orion', folded: false }
            })
          .state('app.chart', {
                url: '/chart',
              templateUrl: 'views/pages/chart.html',
              data : { title: 'Visualizing the phones', folded: false }
            })         
      }
    ]
  );
