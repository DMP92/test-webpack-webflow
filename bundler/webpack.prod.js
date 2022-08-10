const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(
    common, 
    {
    mode: 'production',
    devtool: 'inline-source-map',
    module: {
        rules: [
            // CSS
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            // Images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            // Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

            // CSV 
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },

            // XML
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            
        ],
    },
},);