var app = angular.module('App', ['ngMaterial']);

app.controller('AppCtrl', function ($scope, $http) {

    $scope.type =   [
                        'GET',
                        'POST',
                        'PUT',
                        'DELETE'
                    ];

    $scope.requisicao = {};

    $scope.requisicao.headers = {
        0:{
            param:"",
            value:""
        }
    };

    $scope.requisicao.body = {
        0:{
            param:"",
            value:""
        }
    };

    $scope.send = function(){

        $scope.result = "";
        $scope.header = "";

        $('.load').show();
        
        var url =  $scope.requisicao.url;
        var type = $scope.requisicao.type;

        if(!url || !type){
            return;
        }

        var data = header = "";

        var n = 0;
        angular.forEach($scope.requisicao.headers, function(value, key) {
            if(value.param)
            {
                if(n==0){
                    header = header +'"' + value.param + '": "' + value.value +'"';
                }else{
                    header = header +',"' + value.param + '": "' + value.value +'"';
                }

                n++;
            }    
        });

        n = 0;
        angular.forEach($scope.requisicao.body, function(value, key) {
           if(value.param)
            {
                if(n==0){
                    data = data +'"' + value.param + '": "' + value.value +'"';
                }else{
                    data = data +',"' + value.param + '": "' + value.value +'"';
                }
                
                n++;
            }    

        });

        header = '{ '+header+' }';
        data = '{ '+data+' }';

        var ajax = $http ({
            method: type,
            url: url,
            headers:  JSON.parse(header),
            data: JSON.parse(data)
        });
        
        ajax.success (function (data, status, headers, config) {

            $('.load').hide();

            var header = {};

            header.header   = config.headers;
            header.status   = status;
            header.method   = config.method;

            $scope.header = JSON.stringify(header, null, 4);

            $scope.result = JSON.stringify(data, null, 4);

        });

        ajax.error (function (data, status, headers, config) {
            $('.load').hide();

            var header = {};

            header.header   = config.headers;
            header.status   = status;
            header.method   = config.method;

            $scope.header = JSON.stringify(header, null, 4);
            $scope.result = JSON.stringify(data, null, 4);

        });

    };

    $scope.removeHeaders = function(header){
        
        var head = [];
        var values = $scope.requisicao.headers;
        if(Object.keys(values).length> 1){
            angular.forEach(values, function(value, key) {
                if(header != key)
                    this.push(value);
            },head);

            $scope.requisicao.headers = head;
        }
    };

    $scope.addHeaders = function(){
        var head = [];
        var values = $scope.requisicao.headers;

        angular.forEach(values, function(value, key) {
            this.push(value);
        },head);

        head.push({
            param:"",
            value:""
        });

        $scope.requisicao.headers = head;    
    };

    $scope.removeBody = function(body){
        
        var bod = [];
        var values = $scope.requisicao.body;
        if(Object.keys(values).length> 1){
            angular.forEach(values, function(value, key) {
                if(body != key)
                    this.push(value);
            },bod);

            $scope.requisicao.body = bod;
        }
    };

    $scope.addBody = function(){
        var bod = [];
        var values = $scope.requisicao.body;

        angular.forEach(values, function(value, key) {
            this.push(value);
        },bod);

        bod.push({
            param:"",
            value:""
        });

        $scope.requisicao.body = bod;    
    };

});

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('cyan')
        .accentPalette('red')
        .warnPalette('red')
});