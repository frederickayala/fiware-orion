'use strict';

/* Services */

// Here you can create new services
//angular.module('app.services', []);

angular.module('app.services', ['ngResource']).
config(['$provide', function($provide) {    

  var orion_api = "http://localhost:14800/"

  $provide.factory('Orion', ['$resource',
    function($resource){
      return $resource(orion_api + 'Orion/', {}, {
        get_all_sensors: {url:orion_api + 'UserProfile/profile/', method:'GET'},
        send_data: {url:orion_api + 'UserProfile/update_profile/', method:'POST'}
      });
  }]);

}]);
