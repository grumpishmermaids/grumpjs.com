angular.module('grump.browse', [])

.controller('BrowseController', function ($scope, Files) {
  $scope.grumps = [];

  $scope.getGrumps = function(){
    return Files.getGrumps().then(function (results) {
      $scope.grumps = results;
      
      //returning scope.grumps for testing...
      return $scope.grumps;
    });
  };
});
