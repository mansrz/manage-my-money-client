(function() {
    'use strict';

    angular.module('app', [
        // Common (everybody has access to these)
        'app.core',

        // Features (listed alphabetically)
        'app.accounts',
        'app.approot',
        'app.barchart',
        'app.dashboard',
        'app.settings',
        'app.topnav'
    ]);
})();
