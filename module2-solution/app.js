(function () {
'use strict';

var app=angular.module('ShoppingListCheckOff', []);
app.controller('ToBuyShoppingController',ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyShoppingController.$inject=['ShoppingListCheckOffService'];

AlreadyBoughtShoppingController.$inject=['ShoppingListCheckOffService'];

function ShoppingListCheckOffService () {
  var service=this;
  var itemsToBuy=[{
    name : 'apple',
    quantity : 10
  },{
    name : 'cookies',
    quantity : 30
  },{
    name : 'chocolates',
    quantity : 50
  },{
    name : 'pastries',
    quantity : 5
  },{
    name : 'milk packets',
    quantity : 2
  }];
var itemsAlreadyBought=[];

service.getToBuyItems=function (){
  return itemsToBuy;
};
service.getAlreadyBoughtItems= function(){
  return itemsAlreadyBought;
}
service.addToCart=function (itemIndex){
  var item=itemsToBuy[itemIndex];
  itemsToBuy.splice(itemIndex,1);
  itemsAlreadyBought.push(item);
}

};
function ToBuyShoppingController(ShoppingListCheckOffService){
  var toBuy=this;
  toBuy.itemList=ShoppingListCheckOffService.getToBuyItems();
  console.log(toBuy.itemList);

  toBuy.addToAlreadyBought=function(itemIndex){
    ShoppingListCheckOffService.addToCart(itemIndex);
  }

}

function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var alreadyBought=this;
alreadyBought.itemList=ShoppingListCheckOffService.getAlreadyBoughtItems();
}
})();


