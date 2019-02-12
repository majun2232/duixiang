const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html' //只增加了这行
        })
    ],
    devServer: {
        open: true,
        port: 8080
    }
}