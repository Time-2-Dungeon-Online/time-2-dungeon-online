const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: '/dist/',
        port: 8080,
        proxy: {
            '/api': 'http://localhost:3000',
        }
    },
    module: {
        rules: [
            {
            test: /jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/env', '@babel/react'],
                plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
            },
            },
            {
            test: /scss$/,
            exclude: /node_modules/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};