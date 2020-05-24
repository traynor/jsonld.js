/**
 * store vocabularies
 * @type {Object}
 */
var ContextStore = {
  context: {},
  clear() {
    this.context = {};
  },
  addContext(prop, uri) {
    if(prop) {
      this.context[uri]=prop;
    }
  }
};
module.exports = ContextStore;
