var app = angular.module('meetupApp', ['ngResource']);
app.controller('meetupsController',['$scope','$resource', function($scope,$resource) {
	var Meetup=$resource('/api/meetups');
    Meetup.query(function(results){
    	$scope.meetups=results;
    });
    $scope.meetups=[]    
    
    $scope.createMeetUp=function(){
    	var meetup=new Meetup();
    	meetup.name=$scope.meetupName;
    	meetup.$save(function(result){
    		$scope.meetups.push(result);
    		$scope.meetupName='';
    	});
    	
    }
}]);