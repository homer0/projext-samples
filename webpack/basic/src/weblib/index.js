/**
 * An unnecessary class to organize a dummy library :p.
 */
class WebLib {
  /**
   * Write a _"hello message"_ on a DOM element.
   * @param {string} selector A query selector for the DOM element.
   */
  writeMessage(selector) {
    document.querySelector(selector).innerHTML = 'Hello projext!';
  }
}
// The export needs to be named to be supported by UMD.
module.exports = {
  webLib: new WebLib(),
};
