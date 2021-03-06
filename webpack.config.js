const path = require('path');

console.log(__dirname);
module.exports = {
     entry: './src/app.js',
     output: {
         path: __dirname,
         filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: '/home/commander/React-Learning/public'
    }
}