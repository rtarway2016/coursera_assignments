(function () {
'use strict';

var app=angular.module('LunchCheck', []);

app.controller('LunchCheckController', function ($scope) {
  $scope.message = "";
  $scope.menulist ="";
  $scope.messageClass="";
  $scope.checkLunchItem = function () {
   var menulist=$scope.menulist;
   if ( menulist == ""){ 
   	$scope.message = "Please enter data first" ; 
   	$scope.messageClass="error";
   	}
   	else
   	{var arrayOfMenu=menulist.split(",");
    if(arrayOfMenu.length > 3){
			$scope.message="Too much!";
			$scope.messageClass="noerror";
		}
    else{
    	$scope.messageClass="noerror";
    		$scope.message ="Enjoy!";
  }}};

  $scope.resetAll= function(){
  	$scope.message = "";
    $scope.menulist ="";
    $scope.errorMessage ="";
    $scope.messageClass="";
  }  
});


})();
