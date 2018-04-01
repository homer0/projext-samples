import template from './hello.html';
import webpackLogo from './assets/webpack-angular-logo.png';
import './hello.scss';

class HelloController {
  constructor() {
    this.logo = webpackLogo;
  }
}

export default {
  controller: HelloController,
  template,
};
