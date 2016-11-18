var app = angular.module( "helloApp", [] );

app.directive('hello', function() {
  return {
    scope: {
      'subject': '@'
    },
    controller: function($scope) {
      if (!$scope.subject) {
        $scope.subject = 'World';
      }
    },
    template: '<h1>Hello, {{subject}}!</h1>'
  };
});

app.directive('btBtn', function() {
  return {
    scope: {
      'type': '@'
    },

    controller: function($scope) {
      $scope.classes = '';
      if ($scope.type) {
        $scope.classes = 'btn-success';
      }
      else {
        $scope.classes = 'btn-default';
      }
    },
    template: '<button class="btn {{classes}}">Click me</button>'
  };
});

app.directive('toggle', function() {
  return {
    transclude: 'Turn on',
    scope: {
      onText: '@',
      offText: '@'
    },
    controller: function($scope) {
      $scope.text = '';
      $scope.toggle = function () {
        if ($scope.text === '') {
          $scope.text = $scope.onText;
        }
        else if ($scope.text === $scope.onText) {
          $scope.text = $scope.offText;
        }
        else if ($scope.text === $scope.offText) {
          $scope.text = $scope.onText;
        }
      };
    },
    template: '<button class="btn" ng-click="toggle()" ng-transclude>{{text}}</button>'
  };
});
