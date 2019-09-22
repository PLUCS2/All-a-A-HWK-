var path = require('path');

module.exports = {
    entry: './frontend/app.jsx', // any time you edit this file, re-start webpack
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascript'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map'
};