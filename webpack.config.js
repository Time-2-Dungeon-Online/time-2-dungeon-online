const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: 'dist',
        hot: true,
        port: 8080,
        proxy: {
            '/': 'http://localhost:3000',
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
            test: /\.css$/,
            exclude: /(node_modules)/,
                use: [
                    // style-loader
                    { loader: 'style-loader' },
                    // css-loader
                    {
                        loader: 'css-loader',
                    }
                ]
        }
        ]
    }
};