import template from './hello.html';
import webpackLogo from './assets/webpack-angular-logo.png';
import './hello.scss';
/**
 * A very small controller needed just to get hold of a service and to save variables for the
 * template.
 */
class HelloController {
  /**
   * Class constructor.
   * @param {Object} $log The AngularJS log service, to send a message when the component gets
   *                      mounted.
   */
  constructor($log) {
    'ngInject';

    /**
     * A local reference to the `$log` service.
     * @type {Object}
     */
    this.$log = $log;
    /**
     * The path to the webpack logo the component shows.
     * @type {string}
     */
    this.logo = webpackLogo;
  }
  /**
   * When the component gets mounted, send a message using the `$log` service.
   */
  $onInit() {
    this.$log.info('Hello world!');
  }
}
/**
 * The AngularJS component for the app to implement.
 */
export default {
  /**
   * The component controller.
   * @type {HelloController}
   */
  controller: HelloController,
  /**
   * The HTML template for the view.
   * @type {string}
   */
  template,
};
