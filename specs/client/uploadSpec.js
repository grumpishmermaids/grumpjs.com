describe('UploadController', function () {
  var $scope, $rootScope, $location, $window, $httpBackend, createController, Files;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('grump'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $location = $injector.get('$location');
    $window = $injector.get('$window');
    $httpBackend = $injector.get('$httpBackend');
    Files = $injector.get('Files');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    // used to create our UpploadController for testing
    createController = function () {
      return $controller('UploadController', {
        $scope: $scope,
        $window: $window,
        $location: $location,
        Files: Files
      });
    };
    createController();
    sinon.spy(Files, 'submitGrump');
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    Files.submitGrump.restore();
  });

  describe('On form submission', function() {

    it('should have a submit form method', function () {
      expect($scope.submitForm).to.be.a('function');
    });

    it('should call the submitGrump method', function() {
      $httpBackend.when('POST', 'api/submit').respond();
      $scope.submitForm();
      $httpBackend.flush();
      expect(Files.submitGrump).to.have.been.calledOnce;
    });

    it('should pass the submitGrump method a grumpObject', function() {
      var userObj = {  
        repo : 'someRepo',
        runFile : 'someRunFile',
        command : 'someCommand'
      };

      $httpBackend.when('POST', 'api/submit').respond();
      $scope.submitForm(userObj);
      $httpBackend.flush();
      expect(Files.submitGrump).to.have.been.calledWith(userObj);
    });
    
  });

});






































  // it('should store token in localStorage after signup', function () {
  //   // create a fake JWT for auth
  //   var token = 'sjj232hwjhr3urw90rof';

  //   // make a 'fake' reques to the server, not really going to our server
  //   $httpBackend.expectPOST('/api/users/signup').respond({token: token});
  //   $scope.signup();
  //   $httpBackend.flush();
  //   expect($window.localStorage.getItem('com.shortly')).to.be(token);
  // });

  // it('should have a signin method', function () {
  //   expect($scope.signin).to.be.a('function');
  // });

  // it('should store token in localStorage after signin', function () {
  //   // create a fake JWT for auth
  //   var token = 'sjj232hwjhr3urw90rof';
  //   $httpBackend.expectPOST('/api/users/signin').respond({token: token});
  //   $scope.signin();
  //   $httpBackend.flush();
  //   expect($window.localStorage.getItem('com.shortly')).to.be(token);
  // });