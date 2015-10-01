/* jshint -W024 */
/* jshint expr:true */

describe('TokenController', function () {
  var $scope, $rootScope, $location, $window, $httpBackend, createController, Files, $q;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('grump'));
  beforeEach(inject(function ($injector) {
    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $window = $injector.get('$window');
    $location = $injector.get('$location');
    $scope = $rootScope.$new();
    var $controller = $injector.get('$controller');

    // used to create our controller for testing
    createController = function () {
      return $controller('TokenController', {
        $scope: $scope,
        $window: $window,
        $location: $location,
        Files: Files
      });
    };

    createController();
    //stub location.path() to return a fake url for testing
    sinon.stub($location, 'path', function() { 
      return '/access_token=tokinToken'; 
    });

    sinon.stub($window.localStorage, 'setItem', function(arg1, arg2) { 
      return arg1, arg2; 
    });

  }));

  afterEach(function () {
    //remove stub after each test...
    $location.path.restore();
    $window.localStorage.setItem.restore();
  });

  describe('catchToken', function() {
    
    it('should have a catchToken method', function () {
      expect($scope.catchToken).to.be.a('function');
    });

    it('which should set grumpToken to our token', function() {
      $scope.catchToken();
      expect($window.localStorage.setItem).to.have.been.calledWith('grumpToken', 'tokinToken');
    });

    it('should then redirect us to /browse', function () {
      $scope.catchToken();
      expect($location.path).to.have.been.calledWith('/browse');
    });

  });
});

