angular.module('grump.services', [])

.factory('Files', function ($http) {
  // Your code here
  var submitGrump = function (obj) {
    return $http({
      method: 'POST',
      data: obj,
      url: 'api/submit'
    }).then(function (resp) {
      return resp.data;
    });
  };

  var getGrumps = function () {
    return $http({
      method: 'GET',
      url: 'api/lib'
    }).then(function (resp) {
      return resp;
    });
  };

  return {
    submitGrump : submitGrump,
    getGrumps  : getGrumps
  };

});
