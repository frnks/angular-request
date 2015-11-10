var app = angular.module('App', ['ngMaterial']);

app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {

    $scope.toggleLeft = function () {
        $mdSidenav('left').toggle()
            .then(function () {
                //$log.debug("close LEFT is done");
            });
    };

    $scope.imagePath = 'img/washedout.png';

});

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('cyan')
        .accentPalette('lime')
        .warnPalette('red')
});

app.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('left').toggle()
            .then(function () {
                //$log.debug("close LEFT is done");
            });
    };
});