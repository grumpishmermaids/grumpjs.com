angular.module('grump.services', [])

.factory('Files', function ($http, $window) {
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
    getGrumps  : getGrumps,
  };

})
.factory('MyGrumps', function ($http, $window) {
  //this is the only set of requests that have to deal with permissions-- so token has to be sent in header
  var tokenHeader = {
    //have to include content type else delete wont work.... angular defaults
    "Content-Type": "application/json;charset=utf-8",
    'x-access-token': $window.localStorage.getItem('grumpToken') 
  };

  var getMyGrumps = function () {
    return $http({
      method: 'GET',
      headers: tokenHeader,
      url: 'api/mygrumps'
    }).then(function (resp) {
      return resp;
    });
  };

  var updateGrump = function (grumpID) {
    return $http({
      method: 'PUT',
      headers: tokenHeader,
      url: 'api/mygrumps',
      data: {grumpID: grumpID}
    }).then(function (resp) {
      return resp;
    });
  };

  var deleteGrump = function (grumpID) {
    return $http({
      method: 'DELETE',
      headers: tokenHeader,
      url: 'api/mygrumps',
      data: {grumpID: grumpID}
    }).then(function (resp) {
      return resp;
    });
  };

  return {
    getMyGrumps  : getMyGrumps,
    updateGrump  : updateGrump,
    deleteGrump  : deleteGrump
  };
})
.factory('AuthState', function () {
  //this factory is only here to keep track of whether or not our user has signed in
  var authState = false;

  var getAuthState = function(){
    return authState;
  };

  var setAuthState = function(newState){
    authState = newState;
    return authState;
  };
   return {
    getAuthState  : getAuthState,
    setAuthState  : setAuthState
  };

});
