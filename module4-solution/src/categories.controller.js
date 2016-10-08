(function () {
'use strict';
angular.module('MenuApp')
.controller('CategoryController',CategoryController);
CategoryController.$inject=['itemsCategory'];
function CategoryController(itemsCategory){
var cC=this;
cC.items=itemsCategory;
}


})();