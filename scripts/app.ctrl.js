'use strict';

/**
 * @ngdoc function
 * @name app.controller:AppCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')  
  .controller('AppCtrl', ['$scope', '$window', '$document', '$location', '$rootScope', '$timeout', '$mdSidenav', '$mdColorPalette', '$cookies', '$state', '$mdToast', '$mdDialog', '$mdMedia', '$http', '$interval' , 
    function (             $scope, $window,   $document,   $location,   $rootScope,   $timeout,   $mdSidenav,   $mdColorPalette, $cookies, $state, $mdToast, $mdDialog, $mdMedia, $http, $interval) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i) || !!navigator.userAgent.match(/Trident.*rv:11\./);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');
      // config
      $scope.app = {
        name: 'Orion Demo',
        version: '0.1'
      }

      $scope.init = function(){
        $rootScope.mainTheme = 'default'
      }

      $rootScope.isNotEmpty = function(obj) {
        return Object.keys(obj).length > 0
      };

      $rootScope.handleError = function(error){
        console.log(error)
      }

      $scope.$watch(function() { return $mdMedia('gt-md'); }, function(big) {
        $scope.bigScreen = big;
      });

      function isSmartDevice( $window ) {
        // Adapted from http://www.detectmobilebrowsers.com
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      };

      $scope.getColor = function(color, hue){
        if(color == "bg-dark" || color == "bg-white") return $scope.app.color[ color.substr(3, color.length) ];
        return rgb2hex($mdColorPalette[color][hue]['value']);
      }

      //Function to convert hex format to a rgb color
      function rgb2hex(rgb) {
        return "#" + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
      }

      function hex(x) {
        var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
        return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
      }

      $rootScope.showToast = function(title,position,time){
        $mdToast.show(
          $mdToast.simple()
            .content(title)
            .position(position)
            .hideDelay(time)
        );
      }

      $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
      }

      $scope.openAside = function (menuId) {
        $mdSidenav(menuId).open()
      }      
      
      $scope.closeAside = function (menuId) {
        $mdSidenav(menuId).close()
      }      

    }
  ]);
