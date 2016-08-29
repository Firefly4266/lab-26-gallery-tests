'use strict';

module.exports = function(app) {
  require('./another-directive-ctrl.js')(app);
  require('./another-directive')(app);
};