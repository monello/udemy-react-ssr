module.exports = {
    // Tell Webapack to run Babel on every file it runs through
    // This will tell Babel to take all the JSX, ES2015, ES2016 and ES2017 code and turns it into the equivalent ES5
    module: {
        rules: [
            {
                // This will ensure we only run Babel over JS files
                test: /\.js?$/,
                loader: 'babel-loader',
                // We don't want to process any files inside node_modules
                exclude: /node_modules/,
                // Tell webpack what options to pass along to the 'babel-loader'
                options: {
                    presets: [
                        'react',    // This will turn all our JSX into normal JS function calls
                        'stage-0',  // Will handle some async-code we'll get to later in the course
                        // The following sets some generic rules for Babel
                        // It says that it should run all applicable rules to make the output bundle compatible with the
                        //  last 2 versions of all popular browsers
                        ['env', { targets: { browsers: ['last 3 versions'] } }]
                    ]
                }
            }
        ]
    }
};
