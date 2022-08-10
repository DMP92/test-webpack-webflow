const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(
    common, 
    {
    mode: 'production',
    devtool: 'inline-source-map',
    resolve: {
        fallback: {
            "os": require.resolve("os-browserify/browser")
        }
    }
});