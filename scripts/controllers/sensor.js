app.controller('SensorController', ['$scope', '$rootScope', '$mdDialog', '$cookies', '$state', '$mdToast','$interval','Orion', function( $scope, $rootScope, $mdDialog, $cookies, $state, $mdToast, $interval, Orion) {
	$scope.init = function(){
		$scope.device = new Object()
		$scope.device.device_id = Math.floor(Math.random() * 10000000)
		$interval($scope.checkPosition, 100);
	};
	$scope.checkPosition = function(){
		if(window.DeviceMotionEvent)
		{
		    window.ondeviceorientation = function(event)
		    {
				var data = new Object()
		        data.tilt_x = Math.round(event.beta);
		        data.tilt_y = Math.round(event.gamma);
		        data.tilt_z = Math.round(event.alpha);
		        $scope.data = data

		        var orion = new Orion()
		        orion.id = $scope.device.device_id
		        orion.type = "Device"
		        orion.x = new Object()
		        orion.x.value = data.tilt_x
		        orion.x.type = "Float"
		        orion.y = new Object()
		        orion.y.value = data.tilt_y
		        orion.y.type = "Float"
		        orion.z = new Object()
		        orion.z.value = data.tilt_z
		        orion.z.type = "Float"

		        orion.$send_data().then(
		        	function(results){
		        		console.log(results)
		        	},
		        	function(error){
		        		console.log(error)
		        	})
		    }
		}
	}

}]);