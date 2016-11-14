app.controller('SensorController', ['$scope', '$rootScope', '$mdDialog', '$cookies', '$state', '$mdToast','$interval','Orion', function( $scope, $rootScope, $mdDialog, $cookies, $state, $mdToast, $interval, Orion) {
	$scope.init = function(){
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
		        $scope.data =data

		   //      var vis_data = new vis.DataSet();
		        
		   //      var x = data.tilt_x
			  //   var y = data.tilt_y
			  //   var z = data.tilt_z

			  //   // create some nice looking data with sin/cos
			  //   // var value = (Math.sin(x/50) * Math.cos(y/50) * 50 + 50);
			  //   var value = 1

			  //   for (var i = -360; i <= 360; i++) {
			  //   	vis_data.add({id:i,x:x*i,y:y*1,z:z*1,style:value});
			  //   }

			  //   // specify options
			  //     var options = {
			  //       width:  '300px',
			  //       height: '300px',
			  //       style: 'line',
			  //       showPerspective: true,
			  //       showGrid: false,
			  //       keepAspectRatio: false,
			  //       verticalRatio: 1.0,
			  //       xMin:-360,
					// yMin:-360,
					// zMin:-360,
					// xMax:360,
					// yMax:360,
					// zMax:360
			  //     };


			  //   // Instantiate our graph object.
			  //   var container = document.getElementById('visualization');
			  //   var graph3d = new vis.Graph3d(container, vis_data, options);

		    }
		}
	}

}]);