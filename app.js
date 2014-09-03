define(["angular", "ngRoute"], function(angular) {

  var app = angular.module('app', ['ngRoute']);

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "index.html",
        controller: "MyController"
      })
      .otherwise({
        redirectTo: '/angulartest'
      });
  });

  app.controller("MyController", function($scope) {
    
    $scope.Hello = 'Hello World';
    
    $scope.SomeData = [
      {
        "Firstname" : "Joe",
        "Surname" : "Bloggs",
      },
      {
        "Firstname" : "Nick",
        "Surname" : "Fury",
      },
      {
        "Firstname" : "Bruce",
        "Surname" : "Wayne",
      },
      {
        "Firstname" : "Tony",
        "Surname" : "Stark",
      }
    ];
    
  });

});
