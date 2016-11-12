var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');


//create enviroment variable for dev
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config'+process.env.NODE_ENV +'.env'));
} catch(e) {

}

//export webpack config
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
          'process_env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            API_KEY: JSON.stringify(process.env.API_KEY),
            AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
            DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
            STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
          }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
