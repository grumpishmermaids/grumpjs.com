/* jshint -W024 */
/* jshint expr:true */

describe('MyGrumpsController', function () {
  var $scope, $rootScope, $location, $window, $httpBackend, createController, MyGrumps, $q;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('grump'));
  
  beforeEach(inject(function ($injector) {
    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $window = $injector.get('$window');
    $scope = $rootScope.$new();
    MyGrumps = $injector.get('MyGrumps');
    var $controller = $injector.get('$controller');
    $q = $injector.get('$q');

    // used to create our controller for testing
    createController = function () {
      return $controller('MyGrumpsController', {
        $scope: $scope,
        $window: $window,
        $location: $location,
        MyGrumps: MyGrumps

      });
    };

    createController();
    //stub the services functions (getmygrumps has to return a promise)
    sinon.stub(MyGrumps, "getMyGrumps", function() {
      return $q(function(resolve, reject){
        if(true) { resolve(); } 
        else { reject(); }
      });
    });

    sinon.stub(MyGrumps, "updateGrump", function() {
      var deferred = $q.defer();
      deferred.resolve();
      return deferred.promise;
    });

    // sinon.stub(MyGrumps, "updateGrump", function() {
    //   return $q(function(resolve, reject){
    //     if(true) { console.log('resolved'); return resolve(); } 
    //     else { reject(); }
    //   });
    // });

    sinon.stub(MyGrumps, "deleteGrump", function() {
      return $q(function(resolve, reject){
        if(true) { return resolve(); } 
        else { return reject(); }
      });
    });
  }));

  afterEach(function () {
    //remove stub after each test...
    MyGrumps.getMyGrumps.restore();
    MyGrumps.updateGrump.restore();
    MyGrumps.deleteGrump.restore();

  });

  describe('getMyGrumps', function() {

    it('should exist', function () {
      expect($scope.getMyGrumps).to.be.a('function');
    });

    it('should call MyGrumps.getMyGrumps', function () {
      $scope.getMyGrumps();
      expect(MyGrumps.getMyGrumps).to.have.been.called;
    });

  });

  describe('updateGrump', function () {

    beforeEach(function() {
      sinon.stub($scope, 'getMyGrumps', function() { return true; });
    });

    afterEach(function(){
      $scope.getMyGrumps.restore();
    });

    it('should exist', function () {
      expect($scope.updateGrump).to.be.a('function');
    });

    it('should call MyGrumps.updateGrump', function () {
      $scope.updateGrump();
      expect(MyGrumps.updateGrump).to.have.been.called;
    });

    it('should call $scope.getMyGrumps -- updating the data in the view', function (done) {
      $scope.updateGrump().then(function() { 
        expect($scope.getMyGrumps).to.have.been.called;
        done();
      });
      // this fires promise to resolve
      $scope.$apply();
    });
  
  });

  describe('deleteGrump', function () {

    beforeEach(function() {
      sinon.stub($scope, 'getMyGrumps', function() { return true; });
    });

    afterEach(function(){
      $scope.getMyGrumps.restore();
    });

    it('should exist', function () {
      expect($scope.deleteGrump).to.be.a('function');
    });

    it('should call MyGrumps.deleteGrump', function () {
      $scope.deleteGrump();
      expect(MyGrumps.deleteGrump).to.have.been.called;
    });

    it('should call $scope.getMyGrumps -- updating the data in the view', function (done) {
      $scope.deleteGrump().then(function() { 
        expect($scope.getMyGrumps).to.have.been.called;
        done();
      });
      //this fires the promise to resolve...
      $scope.$apply();
    });
  
  });
  
});



























