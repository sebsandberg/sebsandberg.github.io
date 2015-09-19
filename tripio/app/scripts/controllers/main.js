'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('MainCtrl', ['$scope',function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.photos = [
        {id: 'p1', 'title': 'A nice day!', 'rating':4, 'tag': [
    'streetart',
    'Museum',
    'Clubbing'
    ],src: "http://lorempixel.com/300/400/"},
        {id: 'p2', 'title': 'Puh!', 'rating':3, 'tag':[
    'streetart',
    'Museum',
    'Clubbing'
    ], src: "http://lorempixel.com/300/400/sports"},
        {id: 'p3', 'title': 'What a club!','rating':2, 'tag':[
    'streetart',
    'Museum',
    'Clubbing'
    ], src: "http://lorempixel.com/300/400/nightlife"},
        {id: 'p4', 'title': 'KUNG!','rating':5 ,'tag':[
    'streetart',
    'Museum',
    'Clubbing'
    ], src: "http://lorempixel.com/300/400/nightlife"}
    ];
  }]);
