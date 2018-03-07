class WebLib {
  getMessage() {
    return 'Hello projext!';
  }
}

module.exports = {
  webLib: new WebLib(),
};
