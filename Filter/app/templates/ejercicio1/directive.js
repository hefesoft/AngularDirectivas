(function() {
    'use strict';

    var app = angular.module('app');

    app.directive('ejemplo1', function ($compile) {
        return {
            //restrict: 'E', // Se restringe a ser propiedad de un elemento
            restrict : 'C', // Se restringe a ser propiedad de un elemento
            link: function (scope, element, attrs, controller) {
                var markup = '<input type="text" ng-model="vm.dataEjemplo" /> {{vm.dataEjemplo}} <br/>';
                angular.element(element).html($compile(markup)(scope));
            }
        };
    })})();