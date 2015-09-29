/* jshint -W024 */
/* jshint expr:true */

describe('AuthFactory', function () {
  var $scope, $rootScope, $location, $window, $httpBackend, createController, Files, $q;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('grump'));
  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    Auth = $injector.get('Auth');

    // sinon.spy(Files, "getGrumps");
    // sinon.spy(Files, "submitGrump");

  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    // Files.getGrumps.restore();
    // Files.submitGrumps.restore();
  });

  describe('initiateSignin', function () {

    it('should exist', function () {
      expect(Auth.initiateSignin).to.be.a('function');
    });

    it('should make a get request to /api/auth/signin', function () {
      $httpBackend.expectGET('/api/auth/signin').respond(200);
      Auth.initiateSignin();
      $httpBackend.flush();
    });

    it('should return url to redirect to in a promise', function (done) {
      $httpBackend.expectGET('/api/auth/signin').respond({url:"www.whereverwhenever.com"});
      Auth.initiateSignin().then(function(resp){
        expect(resp.data.url).to.eql('www.whereverwhenever.com');
        done();
      });
      $httpBackend.flush();
    });
    
  });

});



//   describe('getting grumps', function() {
    
//     it('should have a getGrumps method', function () {
//         expect(Files.getGrumps).to.be.a('function');
//       });

//     it('which when called should make a GET request to server', function () {
//         $httpBackend.expectGET('api/lib').respond();
//         Files.getGrumps();
//         $httpBackend.flush();
//       });

//     it('and should then pass the resp out through a promise', function (done) {
//       $httpBackend.expectGET('api/lib').respond("pokemon");
//       Files.getGrumps().then(function(resp){
//         expect(resp.data).to.eql('pokemon');
//         done();
//       });
//       //werid async code.. .but it works
//       $httpBackend.flush();

//     });

//   });

//   describe('submitting a grump', function(done) {
//     it('should have a submitGrump method', function () {
//         expect(Files.submitGrump).to.be.a('function');
//       });

//     it('which when called should make a POST request to server', function () {
//         $httpBackend.expectPOST('api/submit').respond();
//         Files.submitGrump();
//         $httpBackend.flush();
//       });

//     it('and should called should send a user object to the server', function () {
//         var userObj = {  
//           repo : 'someRepo',
//           runFile : 'someRunFile',
//           command : 'someCommand'
//         };
//         $httpBackend.expectPOST('api/submit', userObj).respond();
//         Files.submitGrump(userObj);
//         $httpBackend.flush();
//       });
//   });
// });