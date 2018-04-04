import angular from 'angular';
import main from './components/main/main.component';
import hello from './components/hello/hello.component';

angular.module('projextSamplesWebpackAngularjs', [])
.component('main', main)
.component('hello', hello);
