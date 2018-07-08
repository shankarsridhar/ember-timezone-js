'use strict';

module.exports = {
  name: 'ember-timezone-js',

  included: function(app) {
    this._super.included(app);

    app.import('node_modules/timezone-js/src/date.js', {
      prepend: true
    });
    app.import('vendor/ember-timezone-js/shim.js', {
      type: 'vendor',
      exports: { timezoneJS: ['default'] }
    });
  }
};
