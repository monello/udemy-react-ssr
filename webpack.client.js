const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    // Point Webpack to the root file of our client application
    entry: './src/client/index.js',

    // Tell Webpack where to put the output (generated bundle)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);
