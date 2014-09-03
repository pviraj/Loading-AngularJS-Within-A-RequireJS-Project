define('hello', ['jquery'], function($) {
  $(function() {
    
    $( "button" ).click(function() {
      $( "p" ).toggle( "slow" );
    });
    
  });
});


(function(require) {
  'use strict';

  if ('__proto__' in {}) {
    require.config({
      paths: {
        'jquery': 'jquery',
				'angular': 'angular',
				'ngRoute': 'angularRoute'
      },
      shim: {
        'angular': { deps: ['jquery'], exports: 'angular' },
				'ngRoute': { deps: ['angular'] },
				'app': { deps: ['angular', 'ngRoute'] },
      },
      waitSeconds: 60
    });
  }
  
  define('loadAngular', function(require) {
		if(document.querySelector("[ng-controller]")) {
		    require(['app'], function () {
				angular.bootstrap(document,['app']);
			});
		}
	});

	require(['loadAngular']);

})(this.require);

requirejs(["hello"]);
