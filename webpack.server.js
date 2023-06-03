const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform Webpack that we're building a bundle for NodeJS, rather than for the browser
    target: 'node',

    // Point Webpack to the root file of our server application
    entry: './src/index.js',

    // Tell Webpack where to put the output (generated bundle)
    output: {
        filename: 'bundle.js',
        // we don't have to manyally go create the 'build' folder webpack will create it if it doesn't exist
        // it will also recreate it each time we run the build script (if it doesn't exist)
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
