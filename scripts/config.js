// config

var app =  
angular.module('app')
  .config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$resourceProvider',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide, $resourceProvider) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
        $resourceProvider.defaults.stripTrailingSlashes = false;
        $compileProvider.debugInfoEnabled(false);
    }
  ])
  .config(['ChartJsProvider',function(ChartJsProvider) {
    ChartJsProvider.setOptions({ colors : ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"] });
  }]) 
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.latencyThreshold = 100;
    cfpLoadingBarProvider.includeSpinner = true
    cfpLoadingBarProvider.startSize = 0.1;;
    // cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>';
    // cfpLoadingBarProvider.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><md-progress-linear class="md-accent" md-mode="indeterminate"></md-progress-linear></div></div>';
  }])
  .config(['$mdThemingProvider',function($mdThemingProvider) {
    $mdThemingProvider.alwaysWatchTheme(true);
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('deep-purple')
      .warnPalette('red');
    $mdThemingProvider.theme('red')
      .primaryPalette('red', {
                              'default': '900', // by default use shade 400 from the pink palette for primary intentions
                              'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
                              'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                              'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
                      })
      .accentPalette('indigo', {
                              'default': '400', // by default use shade 400 from the pink palette for primary intentions
                              'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
                              'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                              'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
                      })
      .warnPalette('orange');
    $mdThemingProvider.theme('indigo')
      .primaryPalette('indigo')
      .accentPalette('deep-purple')
      .warnPalette('amber');
    $mdThemingProvider.theme('amber')
      .primaryPalette('amber')
      .accentPalette('indigo')
      .warnPalette('red');
    $mdThemingProvider.theme('green')
      .primaryPalette('green')
      .accentPalette('light-green')
      .warnPalette('lime');
    $mdThemingProvider.theme('blue')
      .primaryPalette('blue')
      .accentPalette('teal')
      .warnPalette('amber');
    $mdThemingProvider.theme('cyan')
      .primaryPalette('cyan')
      .accentPalette('light-blue')
      .warnPalette('blue');
    $mdThemingProvider.theme('pink')
      .primaryPalette('pink')
      .accentPalette('purple')
      .warnPalette('deep-purple');
    $mdThemingProvider.theme('blue-grey')
      .primaryPalette('blue-grey')
      .accentPalette('teal')
      .warnPalette('lime');
  }])