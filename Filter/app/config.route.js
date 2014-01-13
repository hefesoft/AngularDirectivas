(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="icon-dashboard"></i> Dashboard'
                    }
                }
            }, {
                url: '/admin',
                config: {
                    title: 'admin',
                    templateUrl: 'app/admin/admin.html',
                    settings: {
                        nav: 2,
                        content: '<i class="icon-lock"></i> Admin'
                    }
                }
            },{
                url: '/Ejercicio1',
                config: {
                    title: 'Ejercicio 1',
                    templateUrl: 'app/Ejercicio1/Ejercicio1.html',
                    settings: {
                        nav: 3,
                        content: '<i class="icon-lock"></i> Ejercicio 1'
                    }
                }
            }, {
                url: '/Ejercicio2',
                config: {
                    title: 'Ejercicio 2',
                    templateUrl: 'app/Ejercicio2/Ejercicio2.html',
                    settings: {
                        nav: 3,
                        content: '<i class="icon-lock"></i> Ejercicio 2'
                    }
                }
            }
        ];
    }
})();