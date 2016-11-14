app.controller('ChartController', ['$scope', '$rootScope', '$mdDialog', '$cookies', '$state', '$mdToast','Orion', function( $scope, $rootScope, $mdDialog, $cookies, $state, $mdToast, Orion) {
  
  $scope.init = function(){
  	var colours = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"]
    var options = { elements:{ line: {fill:false}}, legend: {display: true}, animation:{duration:0}};    
  	$scope.reports = new Object()
  	$scope.load_report("total_packages_per_year",colours,options)
  	$scope.load_report("total_packages_per_month",colours,options)
  	$scope.load_report("attendance_per_package_per_year",colours,options)
  	$scope.load_report("attendance_per_package_per_month",colours,options)
  	$scope.load_report("percentage_attendance_per_package_per_year",colours,options)
  	$scope.load_report("percentage_attendance_per_package_per_month",colours,options)
    $scope.months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    var d = new Date();
    $scope.this_month = $scope.months[d.getMonth()]
  };  

  $scope.load_report = function(name,colours,options){
  	var report = new Report()
  	report.name = name
  	report.$get().then(
  		function(results){
  			if(results.results.length > 0){
  				var report_data = results.results[0];
	  			$scope.reports[name] = report_data.metadata;
				  $scope.reports[name].colours = colours;
				  $scope.reports[name].options = options;
			}
  		},
  		function(error){
  			$rootScope.handleError(error)
  	})
  }

}]);