
(function(){//IIFE BEGIN
var indexNgApp = angular.module('indexNgApp', ['ngRoute']);

indexNgApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/listing/:jobId', {
    template: '',
    controller: function($scope, $routeParams, $location, $timeout, $anchorScroll){
      $scope.elem = angular.element("a[href='" + "#" + $routeParams.jobId + "-panel']");

      $timeout(function(){
            /*
              Why in here? See (6/5/2015): https://docs.angularjs.org/error/$rootScope/inprog/#triggering-events-programmatically
            */
            $scope.elem.trigger('click');
          },
        0, false);

      var theJobId = $routeParams.jobId;

      $timeout(function(){
          /*
            Why in here? See (6/5/2015): https://docs.angularjs.org/error/$rootScope/inprog/#triggering-events-programmatically
          */
          $location.path('/').hash(theJobId);
          $anchorScroll();
        }, 0, false

      );
    } 
  })
  .otherwise({
    redirectTo: '/'
  });
}]);

indexNgApp.controller('ListingsController', ['$log', function($log){
  var self = this;

  self.emailAddr = 'jobs@meanstack.org';

}]);

})();//IIFE END