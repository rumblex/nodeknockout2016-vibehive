var webpackConfig = require('./webpack.config.js');
module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], //browers to use for testng
    singleRun: true,
    frameworks: ['mocha'], //frameworks used in testing
    files: ['app/tests/**/*.test.jsx',
    'node_modules/script!jquery/dist/jquery.min.js',
    'node_modules/script!foundation-sites/dist/foundation.min.js',
    ], //globbing pattern
    preprocessors: { //what preprocessors to use
      'app/tests/**/*.test.jsx':['webpack', 'sourcemap']
    },
    reporters: ['mocha'], //what reporters to use to do reporters
    client: {
      mocha: { //wait 5 secs to timeout tests
        timeout: '5000'
      }
    },
    webpack:webpackConfig, //use the config file to load the app for testing
    webpackServer: {
      noInfo: true
    }
  });
}
