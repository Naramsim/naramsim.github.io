const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',
    devtool: 'sourcemap',
    entry: './src/app/components/App.jsx',
    output: {
        libraryTarget: 'umd',
        path: 'dist',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
            test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    postcss: function () {
        return [require('postcss-cssnext')];
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true,
            cache: false
        }),
        new CopyWebpackPlugin([ { from: 'src/data'} ])
    ]
};
