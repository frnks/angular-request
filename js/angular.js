var app = angular.module('App', ['ngMaterial']);

app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildToggler('left');

    $scope.imagePath = 'img/washedout.png';

    function buildToggler(navID) {
        return function() {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    //$log.debug("toggle " + navID + " is done");
                });
        }
    }

});

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('cyan')
        .accentPalette('lime')
        .warnPalette('red')
});

app.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('left').close()
            .then(function () {
                //$log.debug("close LEFT is done");
            });
    };
});