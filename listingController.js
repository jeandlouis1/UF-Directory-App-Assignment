angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;


     

      $scope.hoverIn = function(index){
      this.hoverEdit = true;
      $scope.detailedInfo = $scope.listings[index];

      };

      $scope.hoverOut = function(){
      this.hoverEdit = false;
      };
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
     
    $scope.addListing = function() {
      var inputs = {code: $scope.name, name: $scope.code, address:$scope.add,coordinates: {
                latitude: $scope.lad, 
                longitude: $scope.long
            }};

        if ($scope.code && $scope.name && $scope.lad && $scope.long && $scope.add) {
          $scope.listings.push(inputs);
          $scope.code = '';
          $scope.lad = '';
          $scope.long = '';
          $scope.add = '';
          $scope.name = '';
        }
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo =$scope.listings(index);
    };
  }
]);