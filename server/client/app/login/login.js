angular.module('grump.login', [])

.controller('LoginController', function ($scope ) {
  $scope.loginInfo= {
    username: null,
    password: null,
  };

$scope.submitForm = function(obj) {
  Files.submitGrump(obj)
    .then(function(result){
      //do something with the results...
  });
};

});

