(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController)
.controller('MyInfoController',MyInfoController);


MyInfoController.$inject=['UserService'];
function MyInfoController(UserService){
	var myInfo=this;
	myInfo.dispMessage=false;
	myInfo.User=UserService.getUser();
	console.log(myInfo);
	if(angular.isUndefined(myInfo.User)){
		console.log("In hello");
	myInfo.dispMessage=true;
	}
	else
	{
	myInfo.image=myInfo.User.favMenu.short_name;
	myInfo.image=myInfo.image.replace(/[0-9]/g,'');

}
}



SignUpController.$inject = ['UserService'];
function SignUpController(UserService){
	var reg=this;
	reg.MenuCheckError="";
reg.dispMessage=false;
	reg.checkFavMenu=function(ShortName){
		console.log("hello");
var promise=UserService.getFavMenu(ShortName);
promise.success(function(response){
console.log("Response from Json" ,response);
	reg.user.favMenu=response;
	reg.dispMessage=true;
	reg.message="Your information has been saved";
	UserService.setUser(reg.user); 
})
.error(function(error){
console.log(error);
reg.MenuCheckError="No such menu number exists";
reg.dispMessage=false;
});
	}
reg.reset=function(){
	reg.MenuCheckError="";
	reg.message="";
};
reg.submit=function(){
reg.checkFavMenu(reg.user.favMenu);
};
}
})();