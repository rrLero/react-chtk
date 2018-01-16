const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, '../docs')
    },
    resolve: {
        extensions: [
            '.less',
            '.js',
            '.jsx'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        }),
        new CopyWebpackPlugin ([
            { from: 'src/app/img', to: 'img' }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve()
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: "./img/[name].[ext]"
                    }
                }
            }
        ]
    }
};