angular.module('grump.token', [])
.controller('TokenController', function ($location, $window, $scope) {
  $scope.catchToken = function () {
    //extracts the token from the url -- sent back from the server
    var token = $location.path().split("=")[1];
    //places token in local storage
    $window.localStorage.setItem('grumpToken', token);
    //redirects to browse page
    $location.path('/browse');
  };
  $scope.catchToken();
});