(function () {
'use strict';
angular.module('lunchApp', [])

.controller('MyLunchController', MyLunchController);
MyLunchController.$inject = ['$scope'];

function MyLunchController($scope) {
  $scope.lunchItems = "";
  $scope.myMessage = "";

  $scope.checkItems = function(){
    //check for whitespaces or no input
    if($scope.lunchItems == "" || $scope.lunchItems.trim()==0){
      $scope.myColor = "red";
      $scope.myMessage = "Please enter data first";
    }
    else{
      //split with respect to comma
      var lunchItemsArray = $scope.lunchItems.split(',');
      //count values not whitespaces or no input
      //num is the real number of lunch items
      var num = 0;
      for(var i=0; i<lunchItemsArray.length; i++){
        if(lunchItemsArray[i]!="" && lunchItemsArray[i].trim()!=0)
          num++;
      }
      //implement some color triggering and output
      if(num <= 3 && num != 0){
        $scope.myColor = "green";
        $scope.myMessage = "Enjoy!";
      }
      else if(num>3 && num != 0){
        $scope.myColor = "green";
        $scope.myMessage = "Too much!";
      }
      //no input items like ",,,,,,,,,,,,,,,,,,,,,,,"
      else{
        $scope.myColor = "red";
        $scope.myMessage = "Please enter data first";
      }
    }
  }
};

})();
