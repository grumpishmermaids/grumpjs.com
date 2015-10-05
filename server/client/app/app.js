angular.module('grump', [
  'grump.services',
  'grump.upload',
  'grump.browse',
  'grump.myGrumps',
  'grump.auth',
  'grump.token',
  'grump.errorPage',
  'ngRoute',
  'ngSanitize',
  'btford.markdown'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/gettingStarted', {
      templateUrl: 'app/gettingStarted/gettingStarted.html'
    })
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
    .when('/errorpage/:error?', {
      templateUrl: 'app/errorPage/errorpage.html',
      controller: "ErrorPageController"
    })
    .otherwise({
        redirectTo : '/browse'
    });

  // $httpProvider.interceptors.push('AttachTokens');
}).run();