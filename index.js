require('babel-register')({ presets: ['es2015', 'stage-0'] });
require('babel-polyfill');
require('./src/server.js');