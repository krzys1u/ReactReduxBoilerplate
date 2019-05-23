const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const loaders = [
    {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
    },
    {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })
    },
    {
        test: /\.(jpe?g|gif|png|ico|svg)$/,
        use: [{
            loader: 'file-loader',
            options: {
                outputPath: 'catalog_static/img/',
                name: '[name][hash].[ext]'
            }
        }]
    },
    {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
    }
];

function getConfig(production, version, analyze) {
    const mode = production ? 'production': 'dev';

    console.info(`Build v${version} with ${mode} mode`);

    const minify = {
        removeAttributeQuotes: true
    };

    const plugins = [];

    if (analyze) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    plugins.push(
        new webpack.LoaderOptionsPlugin({
            debug: !production
        }),
        new HtmlWebpackPlugin({
            template: './app/index.html',
            filename: 'index.html',
            inject: 'body',
            minify: production ? minify : false,
            version: version,
            production: production
        }),
        new ExtractTextPlugin({
            filename: 'catalog_static/styles/[name][hash].css',
            allChunks: true
        }),
        new FlowWebpackPlugin(),
    );

    let devTool = 'eval-source-map';

    if (production) {
        devTool = false;

        plugins.push(
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    unused: true,
                    dead_code: true,
                    warnings: false,
                },
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            })
        );
    }

    return {
        entry: './app/index.js',
        output:{
            path: path.resolve('dist'),
            filename: 'catalog_static/[name].[chunkhash].js'
        },
        devtool: devTool,
        module:{
            rules: loaders,
        },
        plugins: plugins,
        devServer: {
            disableHostCheck: true,
            overlay: {
                errors: true,
                warnings: true
            }
        }
    };
}
module.exports = function(env){
    const config = require('./package');
    const prod = !!(env && env.production);
    const analyze = !!(env && env.analyze);

    return getConfig(prod, config.version, analyze);
};