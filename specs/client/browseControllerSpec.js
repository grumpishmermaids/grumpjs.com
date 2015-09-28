describe('BrowseController', function () {
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
      return $controller('BrowseController', {
        $scope: $scope,
        $window: $window,
        $location: $location,
        Files: Files
      });
    };
    createController();
    //stub for testing getGrumps functionailty
    sinon.stub(Files, "getGrumps", function() {
      return $q(function(resolve, reject){
        if(true) { resolve({data:["kittens"]}); } 
        else { reject(); }
      });
    });
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    Files.getGrumps.restore();
  });

  describe('getGrumps Method', function() {

    it('should have a getGrumps method', function () {
      expect($scope.getGrumps).to.be.a('function');
    });

    it('which should call the Files.getGrumps method', function() {
      // $httpBackend.when('GET', 'api/lib').respond();
      $scope.getGrumps();
      // $httpBackend.flush();
      expect(Files.getGrumps).to.have.been.calledOnce;
    });

    it('and should set $scope.grumps to the response from getGrumps', function() {
      $scope.getGrumps().then(function(result){
        expect(result).to.eql(["kittens"]);
      });
    });
  });
});

