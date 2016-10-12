const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',
    devtool: 'sourcemap',
    entry: './src/app/components/App.jsx',
    output: {
        libraryTarget: 'umd',
        path: 'dist',
        filename: 'index.js',
        //publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
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
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[name][hash].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            }
        ]
    },
    postcss: function () {
        return [require('postcss-cssnext')];
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.hbs',
            inject: 'body',
            hash: true,
            cache: false
        }),
        new CopyWebpackPlugin([ { from: 'src/data'} ])
    ]
};
