angular.module('grump.auth', [])

.controller('AuthController', function ($window, $scope) {
  //this sends the user to the github signin page
  $scope.login=function() {
      var scope = "user:email"; // this sets meta-data we are able to access about user through github api
      var clientID = "61c332d3744979e21dfc";
      var url = "https://github.com/login/oauth/authorize?client_id="+clientID+"&scope="+scope;
      $window.location.replace(url);
  };
});


