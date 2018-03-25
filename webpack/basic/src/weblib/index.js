class WebLib {
  writeMessage(selector) {
    document.querySelector(selector).innerHTML = 'Hello projext!';
  }
}

module.exports = {
  webLib: new WebLib(),
};
