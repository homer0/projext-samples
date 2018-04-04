import template from './hello.html';
import webpackLogo from './assets/webpack-angular-logo.png';
import './hello.scss';

class HelloController {
  constructor($log) {
    'ngInject';

    this.$log = $log;
    this.logo = webpackLogo;
  }

  $onInit() {
    this.$log.info('Hello world!');
  }
}

export default {
  controller: HelloController,
  template,
};
