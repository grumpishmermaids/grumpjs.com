/* jshint -W024 */
/* jshint expr:true */

describe('UploadController', function () {
  var $scope, $rootScope, $location, $window, $httpBackend, createController, Files, $q;

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
    $q = $injector.get('$q');
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
    // sinon.spy(Files, 'submitGrump');

    //stub for testing submitGrumps functionailty
    sinon.stub(Files, "submitGrump", function(obj) {
      return $q(function(resolve, reject){
        if(true) { resolve(obj); } 
        else { reject(); }
      });
    });

  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    Files.submitGrump.restore();
  });

  describe('On form submission', function() {

    it('should have a submitForm method', function () {
      expect($scope.submitForm).to.be.a('function');
    });

    it('which should call the submitGrump method', function() {
      $scope.submitForm();
      expect(Files.submitGrump).to.have.been.calledOnce;
    });

    it('and should pass the submitGrump method a grumpObject', function() {
      var userObj = {  
        repo : 'someRepo',
        runFile : 'someRunFile',
        command : 'someCommand'
      };

      $scope.submitForm(userObj);
      expect(Files.submitGrump).to.have.been.calledWith(userObj);
    });

    xit('the submitGrump method should not accept an object with any empty keys', function() {
      var userObj = {  
        repo : '',
        runFile : '',
        command : ''
      };

      //to write....
    });


  });
});
