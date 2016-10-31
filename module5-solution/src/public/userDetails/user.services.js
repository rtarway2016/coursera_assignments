 (function(){

angular.module('common')
.service('UserService', UserService);


UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
 	'use strict';
  var service=this;
  var User;
  service.getFavMenu = function (shortName) {
  	console.log(ApiPath + '/menu_items/'+ shortName + '.json');
    return $http.get(ApiPath + '/menu_items/'+ shortName + '.json');
  };

    service.setUser = function (User) {
    console.log(User);
  	service.User=User;
  };
   service.getUser = function () {
    console.log(service.User);
  	return service.User;
  };
}

})();