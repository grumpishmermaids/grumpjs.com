angular.module('grump', [
  'grump.services',
  'grump.upload',
  'grump.browse',
  'grump.myGrumps',
  'grump.auth',
  'grump.token',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/browse', {
      templateUrl: 'app/browse/browse.html',
      controller: 'BrowseController'
    })
    .when('/upload', {
      templateUrl: 'app/upload/upload.html',
      controller: 'UploadController'
    })
    .when('/signin', {
      templateUrl: 'app/auth/auth.html',
      controller: 'AuthController'
    })
    .when('/access_token=:accessToken', {
      template: '',
      controller: "TokenController"
    })
    .when('/mygrumps', {
      templateUrl: 'app/myGrumps/myGrumps.html',
      controller: "MyGrumpsController"
    })
    .otherwise({
        redirectTo : '/browse'
    });

  // $httpProvider.interceptors.push('AttachTokens');
}).run();