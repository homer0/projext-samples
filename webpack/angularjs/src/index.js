// Import the framework.
import angular from 'angular';
// Import the components.
// - The one that add styles for the page.
import main from './components/main/main.component';
// - The one that shows the _"Hello message"_.
import hello from './components/hello/hello.component';

/**
 * Register the module. Since there's no HTML template, the name of the `ng-app` is generated by
 * the plugin using a lowerCamelCase version of the `package.json` name property.
 */
angular.module('projextSamplesWebpackAngularjs', [])
// Since there's no HTML template, the plugin adds a default component named `main`.
.component('main', main)
.component('hello', hello);
