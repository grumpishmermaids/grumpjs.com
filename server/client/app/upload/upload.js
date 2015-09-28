angular.module('grump.upload', [])

.controller('UploadController', function ($scope, Files) {
  $scope.doc= {
    repo : null,
    runFile : null,
    command : null
  };

  $scope.submitForm = function(obj) {
    Files.submitGrump(obj)
      .then(function(result){
        console.log(result);
      });
  };

});
