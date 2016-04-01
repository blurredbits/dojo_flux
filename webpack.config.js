require('babel/register');
var webpackConfig = require('hjs-webpack');
var isDev = process.env.NODE_ENV !== 'production';

module.exports = webpackConfig({
  in:   'src/app.js',
  out:  'public',
  isDev: isDev,
  clearBeforeBuild: true,
  html: function (data) {
    return {
      'index.html': data.defaultTemplate({html: '<div id="app"></div>'})
    }
  }
});
