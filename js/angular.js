var app = angular.module('App', ['ngMaterial']);

app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildToggler('left');

    $scope.imagePath = 'img/washedout.png';

    $scope.isOpenLeft = function(){
        return $mdSidenav('left').isOpen();
    };

    function buildToggler(navID) {
        return function() {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    //$log.debug("toggle " + navID + " is done");
                });
        }
    }

    this.tiles = buildGridModel({
        icon : "avatar:svg-",
        title: "Svg-",
        background: ""
    });

    function buildGridModel(tileTmpl){
        var it, results = [ ];
        for (var j=0; j<11; j++) {
            it = angular.extend({},tileTmpl);
            it.icon  = it.icon + (j+1);
            it.title = it.title + (j+1);
            it.span  = { row : 1, col : 1 };
            switch(j+1) {
                case 1:
                    it.background = "red";
                    it.span.row = it.span.col = 2;
                    it.title = "teste";
                    break;
                case 2: it.background = "green";         break;
                case 3: it.background = "darkBlue";      break;
                case 4:
                    it.background = "blue";
                    it.span.col = 2;
                    break;
                case 5:
                    it.background = "yellow";
                    it.span.row = it.span.col = 2;
                    break;
                case 6: it.background = "pink";          break;
                case 7: it.background = "darkBlue";      break;
                case 8: it.background = "purple";        break;
                case 9: it.background = "deepBlue";      break;
                case 10: it.background = "lightPurple";  break;
                case 11: it.background = "yellow";       break;
            }
            results.push(it);
        }
        return results;
    }
});

app.config( function( $mdIconProvider ){
    $mdIconProvider.iconSet("avatar", 'img/svg/avatars.svg', 128);
});

app.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('left').close()
            .then(function () {
                //$log.debug("close LEFT is done");
            });
    };
});