var context = require.context('./spec', true, /\w+Spec\.jsx?$/);

require('core-js/es5');

context.keys().forEach(context);
module.exports = context;
