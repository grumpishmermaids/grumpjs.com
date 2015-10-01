angular.module('grump.myGrumps', [])

.controller('MyGrumpsController', function ($scope, MyGrumps) {
  $scope.grumps = [];

  $scope.getMyGrumps = function(){
    return MyGrumps.getMyGrumps().then(function (results) {
      $scope.grumps = results.data;

      //returning scope.grumps for testing...
      return $scope.grumps;
    });
  };

  $scope.updateGrump = function (grumpID) {
    return MyGrumps.updateGrump(grumpID).then(function (results) {
      console.log("Grump Updated");
      $scope.getMyGrumps();

      //returning scope.grumps for testing...
      return $scope.grumps;
    });
  };

  $scope.deleteGrump = function (grumpID) {
    return MyGrumps.deleteGrump(grumpID).then(function (results) {
      console.log("Grump Deleted");
      $scope.getMyGrumps();
      
      //returning scope.grumps for testing...
      return $scope.grumps;
    });
  };

});
