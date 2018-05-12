const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    cache: true,
    entry: {
        app: './src/index.js',
        polyfill: 'babel-polyfill'
    },
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: process.env.NODE_ENV === 'production' ? 'https://www.chtk.com.ua/' : '/'
    },
    resolve: {
        extensions: [
            '.less',
            '.js'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        }),
        new BrowserSyncPlugin({
            open: false,
            notify: false,
            port: 9000,
            proxy: 'http://localhost:8080/'
        },
        {
            reload: false
        }),
        new ExtractTextPlugin('styles.css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_KEY: JSON.stringify(process.env.API_KEY),
                API_KEY_GOOGLE: JSON.stringify(process.env.API_KEY_GOOGLE)
            }
        })

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve()
            },
            process.env.NODE_ENV === 'production' ?
                {
                    test: /\.less/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader?{minimize: true}!less-loader'
                    })
                }
                :
                {
                    test: /\.less/,
                    loader: 'style-loader!css-loader!less-loader'
                },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './images/[name].[ext]'
                    }
                }
            }
        ]
    }
};
