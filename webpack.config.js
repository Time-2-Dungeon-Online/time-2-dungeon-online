const path = require('path');
const fs = require('fs');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: '/dist/',
        port: 8080,
        proxy: {
            '/auth': 'http://localhost:3000',
        },
        // https: {
        //   key: fs.readFileSync(path.resolve(__dirname, './server/key.pem')),
        //   cert: fs.readFileSync(path.resolve(__dirname, './server/cert.pem')),
        //   passphrase: 'dungeon',
        // }
    },
    module: {
    rules: [
        {
            test: /\.js?/,
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