
(function(){//IIFE BEGIN
var indexNgApp = angular.module('indexNgApp', ['ngRoute']);

indexNgApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/listing/:jobId', {
    template: '',
    controller: function($scope, $routeParams, $location, $timeout, $anchorScroll){
      $scope.elem = angular.element("a[href='" + "#" + $routeParams.jobId + "-panel']");
      if ($scope.elem === null || $scope.elem === undefined || $scope.elem.length <= 0){
        alert('Listing (' + $routeParams.jobId + ') not found!');
        $location.path('/');
        return;
      }

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
  self.getMailToString = function(jobTitle, jobId){
    //{{controller.emailAddr}}?subject=Pursuing%20Job:{{listing.jobTitle}}, (ID: %20{{listing.jobId}})&amp;body=To%20Whom%20It%20May%20Concern:%0a%0d%0a%0dI%20am%20interested%20in%20pursuing%20the, "{{listing.jobTitle}}",%20opportunity%20listed%20on%20your%20web%20site!%20%20Please%20contact%20me%20at...http://jobs.meanstack.org/#/listing/{{listing.jobId}}

    var mailToString = self.emailAddr + "?subject=Pursuing Job: " +  jobTitle + ", (ID: " +
      jobId + ")&body=To Whom It May Concern:\n\nI am interested in pursuing the \"" + jobTitle +
      "\" opportunity listed on your web site! I have included my contact information below:\n\n" +
      "Phone: <recommended>\nEmail: <if different from current>\nLinkedIn Profile: <recommended>\n" + 
      "Resume: <recommended, url or attached, PDF recommended>\n" +
      "Twitter: <optional>\nGithub: <optional>\nWeb Site or Portfolio: <optional>" + 
      "\n\nListing: http://jobs.meanstack.org/#/listing/" +  jobId;

    return encodeURI(mailToString);
  };

}]);

})();//IIFE END