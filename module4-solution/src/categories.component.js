(function () {
'use strict';
angular.module('data')
.component('categories',{
templateUrl:'src/categorieslist.template.html',
  bindings: {
    items: '<',
  }
})
})();