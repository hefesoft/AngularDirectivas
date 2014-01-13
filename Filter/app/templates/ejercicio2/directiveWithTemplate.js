(function() {
    'use strict';

    var app = angular.module('app');

    app.directive('ejemplo2', function ($compile) {
        return {            
            restrict: 'E',
            templateUrl: 'app/templates/ejercicio2/template.html',
            // Para que se aisle cada control uno del otro
            scope : {
                p: "=p",
                codigo : "&"
            }
        };
    })})();