(function () {
    'use strict';
    var controllerId = 'Ejercicio1';
    angular.module('app').controller(controllerId, ['common', admin]);

    function admin(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Ejercicio 1';

        vm.dataEjemplo = '';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Ejercicio 1 activado'); });
        }
    }
})();