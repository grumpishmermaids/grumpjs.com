/* jshint -W024 */
/* jshint expr:true */

describe('AuthController', function () {
  var $scope, $rootScope, $location, $window, $httpBackend, createController, Files, $q;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('grump'));
  beforeEach(inject(function ($injector) {
    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $window = $injector.get('$window');
    $scope = $rootScope.$new();
    var $controller = $injector.get('$controller');

    // used to create our controller for testing
    createController = function () {
      return $controller('AuthController', {
        $scope: $scope,
        $window: $window,
        $location: $location,
        Files: Files
      });
    };

    createController();
    //stub window.location.replace to test redirect (without actually redirecting)
    sinon.stub($window.location, 'replace', function(arg) { return arg; });
  }));

  afterEach(function () {
    //remove stub after each test...
    $window.location.replace.restore();
  });

  describe('login', function() {

    it('should have a login method', function () {
      expect($scope.login).to.be.a('function');
    });

    it('which should redirect to the github url', function() {
      $scope.login();
      expect($window.location.replace).to.have.been.calledWith("https://github.com/login/oauth/authorize?client_id=61c332d3744979e21dfc&scope=user:email");
    });

  });
});

