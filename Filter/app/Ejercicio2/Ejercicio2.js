(function () {
    'use strict';
    var controllerId = 'Ejercicio2';
    angular.module('app').controller(controllerId, ['common', admin]);

    function admin(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Ejercicio 2';

        vm.dataEjemplo = new Array();
        vm.dataEjemplo = [{ codigo: 1, Nombre: 'Jose' }, { codigo: 2, Nombre: 'Douglas' }, { codigo: 1, Nombre: 'Jose1' }]

        vm.codigo = function (item) {
            log(item.codigo); 
        };

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Ejercicio 2 activado'); });
        }
    }
})();