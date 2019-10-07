const path = require('path');

module.exports = {
    mode: development,
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    devServer: {
    publicPath: '/dist/',
    proxy: {
        '/api': 'http://localhost:3000'
    }
    },
    module: {
    rules: [
        {
            test: /\.jsx?/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            }
        },
        {
            test: /\.scss$/,
            exclude: /(node_modules)/,
                use: [
                    // style-loader
                    { loader: 'style-loader' },
                    // css-loader
                    {
                        loader: 'css-loader',
                    },
                    // sass-loader
                    { loader: 'sass-loader' }
                ]
        }
        ]
    }
};