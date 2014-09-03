Loading AngularJS Within A RequireJS Project
============================================

A simple guide of how to load AngularJS within a RequireJS project

## Basic Setup

* Create your main RequireJS file as normal.
* Add the necessary Angular and Angular Route paths.
* Ensure within your shims, Angular has a jQuery dependency.
* Ensure within your shime, Angular Route has an Angular dependency
* Create a new shim, "app", and add Angular Route as dependcy (based on the above, Angular will be loaded before Angular Route is).
* Define a new module to load the Angular libraries, for example <code>define('loadAngular', function(require) {...</code>
* The example below contains an if statement, that is, if the page contains <code>ng-controller</code>, then load the librabries. This is useful if you have pages on your site that require minimal or no interaction/input from the user - why create additional http requests if you dont have to?
* Require your new module - <code>require(['loadAngular']);</code>
* View the example project here: http://plnkr.co/edit/BsXVsqfizkCThUZqecSN


## Notes

If you require Angular to be loaded throughout your application, remove the if statement within <code>define('loadAngular', function(require) {...</code>


## main.js

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
    
