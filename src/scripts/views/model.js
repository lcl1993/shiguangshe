var tplModel = require('../templates/model.string');

SPA.defineView('model', {
  html: tplModel,

  plugins:['delegated']

});
