var app = angular.module('GDG-app', ['ngRoute']);

  app.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
            .when('/eventos', {
                templateUrl : 'pages/eventos.html',
                controller  : 'eventosController'
            })
            .when('/comunidad', {
                templateUrl : 'pages/comunidad.html',
                controller  : 'comunidadController'
            })
            .when('/patrocinios', {
                templateUrl : 'pages/patrocinios.html',
                controller  : 'patrociniosController'
            })
            .when('/contactanos', {
                templateUrl : 'pages/contactanos.html',
                controller  : 'contactanosController'
            })
            .when('/codigo', {
                templateUrl : 'pages/codigo.html',
                controller  : 'codigoController'
            });
    });


    app.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
    app.controller('eventosController', function($scope){
        $scope.message = "eventos";
    });
    app.controller('comunidadController', function($scope){
        $scope.message = "comunindad";
    });
    app.controller('patrociniosController', function($scope){
        $scope.message = "patrocinios";
    });
    app.controller('contactanosController', function($scope){
        $scope.message = "contactanos";
    });
    app.controller('codigoController', function($scope){
        $scope.message = "codigo";
    });
