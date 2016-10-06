(function () {
'use strict';
var app=angular.module('NarrowItDownApp',[]);
app.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems',foundItemsDirective);



function foundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundItem: '<',
      onRemove: '&'
    },
    controller: foundItemController,
    controllerAs: 'fController',
    bindToController: true
  };

  return ddo;
}

function foundItemController(){
  var fController=this;  
}

NarrowItDownController.$inject=['MenuSearchService'];

MenuSearchService.$inject=['$http','ApiBasePath','$q'];
function MenuSearchService ($http,ApiBasePath,$q) {
  var service=this;
  service.getMatchedMenuItems=function(searchTerm){
return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
  var foundItems={menu_items: []};
    angular.forEach(result.data.menu_items,function(item,i){
      var description=item.description.toLowerCase();
      if(description.indexOf(searchTerm.toLowerCase()) !== -1 )
        {                  
      foundItems.menu_items.push(item);
    }});
  if(foundItems.menu_items.length === 0){
    return $q.reject("Not found"); 
    }
    return foundItems;
});
}
};
function NarrowItDownController(MenuSearchService){
  var narrowC=this;
  narrowC.resetAll=function(){
    narrowC.errorMsg="";
  }
  narrowC.getMatchedMenuItems=function(searchTerm){
  if(searchTerm === undefined ){
    narrowC.errorMsg="Not Found";
  }
  else{
  var promise=MenuSearchService.getMatchedMenuItems(searchTerm);
  promise.then(function (response){
    narrowC.found=response.menu_items;
   
}).catch(function(errorMsg){
narrowC.errorMsg=errorMsg;
narrowC.found=[];
});
narrowC.removeItem=function(index){
  narrowC.found.splice(index,1);
  if(narrowC.found.length === 0){
    narrowC.errorMsg="Not Found";
    console.log(narrowC.errorMsg)
  }
  else
   narrowC.errorMsg="";
}
}}

}
})();


