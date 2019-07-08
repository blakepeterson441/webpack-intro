module.exports = {

    // WEBPACK CONFIG
    entry: './client.js', // start running code here

    mode: 'development',
    devtool: 'inline-source-map',

    // where to put things after they are built
    output: {
        // this is optional - `dist` is default
        path: `${__dirname}/dist`, 
        // what the file name will be
        filename: `bundle.js`
    }
}