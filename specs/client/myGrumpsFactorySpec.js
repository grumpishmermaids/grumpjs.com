/* jshint -W024 */
/* jshint expr:true */

describe('MyGrumpsFactory', function () {
  var $scope, $rootScope, $location, $window, $httpBackend, createController, MyGrumps, $q;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('grump'));
  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    MyGrumps = $injector.get('MyGrumps');
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('getMyGrumps', function() {
    
    it('should have a getMyGrumps method', function () {
        expect(MyGrumps.getMyGrumps).to.be.a('function');
      });

    it('which when called should make a GET request to server', function () {
        $httpBackend.expectGET('api/mygrumps').respond();
        MyGrumps.getMyGrumps();
        $httpBackend.flush();
      });
  });

  describe('updateGrump()', function(done) {
    it('should have a updateGrump method', function () {
        expect(MyGrumps.updateGrump).to.be.a('function');
      });

    it('should make a PUT request to server', function () {
        $httpBackend.expectPUT('api/mygrumps').respond();
        MyGrumps.updateGrump();
        $httpBackend.flush();
    });

  describe('deleteGrump()', function (done) {
    it('should have a deleteGrump method', function () {
        expect(MyGrumps.deleteGrump).to.be.a('function');
      });

    it('should make a DELETE request to server', function () {
        $httpBackend.expectDELETE('api/mygrumps').respond();
        MyGrumps.deleteGrump();
        $httpBackend.flush();
    });
    
    });  
  });
});
