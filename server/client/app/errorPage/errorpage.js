angular.module('grump.errorPage', [])

.controller('ErrorPageController', function ($scope, MyGrumps, $routeParams) {
  $scope.error = $routeParams.error;
  console.log($scope.error);
});