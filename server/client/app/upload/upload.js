angular.module('grump.upload', [])

.controller('UploadController', function ($scope, Files) {
  $scope.doc = {
    repo : null,
    defaultCommand : null,
    description: null
  };

  $scope.submitForm = function(obj) {
    Files.submitGrump(obj)
      .then(function(result){
        //TODO: notify user of success
        $scope.doc.repo = null;
        $scope.doc.defaultCommand = null;
        $scope.doc.description = null;
        console.log(JSON.stringify(result));
      })
      .catch(function (error) {   //TODO: notify user of error
        console.log(error);
      });
  };

});
