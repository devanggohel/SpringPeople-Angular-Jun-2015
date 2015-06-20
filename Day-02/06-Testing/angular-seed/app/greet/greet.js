'use strict';

angular.module('myApp.greet', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/greet', {
        templateUrl: 'greet/greet.html',
        controller: 'greetController'
      });
    }])

    .value("appDefaults", {trimLength : 30})

    .filter('trimText', function(appDefaults){
            return function(data, trimLength){
                trimLength = trimLength || appDefaults.trimLength;
                return data.length > trimLength ? data.substr(0,trimLength) + "..." : data;
            };
        })

    .controller('greetController', ['$scope', function($scope) {
        $scope.name = '';
        $scope.greetMsg = '';
        $scope.greet = function(){
          $scope.greetMsg = 'Hi ' + $scope.name  + ', Have a nice day!';
        };
    }]);
