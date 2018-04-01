import angular from 'angular';
import main from './components/main/main.component';
import hello from './components/hello/hello.component';


const mainModule = angular.module('main', [])
.component('main', main)
.component('hello', hello);

export default mainModule.name;
