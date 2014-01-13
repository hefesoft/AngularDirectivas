(function() {
    'use strict';

    var app = angular.module('app');

    app.directive('ejemplo1', function ($compile) {
        return {            
            restrict: 'A',
            template: '<input type="text" ng-model="vm.dataEjemplo" /> {{vm.dataEjemplo}} <br/>',
            // Para que se aisle cada control uno del otro
            scope : {

            }
        };
    })})();