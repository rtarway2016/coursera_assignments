(function () {
'use strict';
angular.module('MenuApp')
.controller('itemsController',ItemsController);
ItemsController.$inject=['itemsList'];
function ItemsController(itemsList){
var itemsC=this;
itemsC.itemList=itemsList.menu_items;
}
})();