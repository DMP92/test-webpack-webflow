const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');


module.exports = merge(
    common, 
    {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            linkType: "text/css",
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                
            },
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
});