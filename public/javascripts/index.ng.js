
(function(){//IIFE BEGIN

var indexNgApp = angular.module('indexNgApp', []);

indexNgApp.controller('ListingsController', ['$log', function($log){
  var self = this;

  self.emailAddr = 'jobs@meanstack.org';

}]);

})();//IIFE END