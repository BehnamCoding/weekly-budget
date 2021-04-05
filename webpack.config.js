const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const config = {
    entry: {
        bundle: './src/scripts/app.js',
        files: './src/scripts/externals.js'
    },
    output: {
        path: path.resolve(__dirname , 'dist'),
        filename: './assets/js/[name].js'
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: './images',
                    outputPath: 'images'
                }
            },
            {
                test: /\.(eot||ttf||woff||woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '../../fonts',
                    outputPath: 'fonts'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'jquery': path.join(__dirname, '/node_modules/jquery/dist/jquery.min.js')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'Note Book',
            template: './src/pages/index.html',
            filename: 'index.html',
            chunks: ['bundle' , 'files'],
            minify: false,
            scriptLoading: 'blocking'
        }),
    ]
}

// module export
module.exports = (env , {mode})=> {
    console.log(mode);

    let isDevelopment = mode === 'development';

    if(isDevelopment) {
        config.devServer = {
            contentBase: path.resolve(__dirname , 'dist'),
            index: 'index.html',
            port: 9000
        }
    }

    if(!isDevelopment) {
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: './assets/css/[name].css'
            })
        )
    }

    config.module.rules.push(
        {
            test: /\.(s[ac]ss)$/,
            use: [isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader , 'css-loader' , 'sass-loader']
        }
    )


    return config;
}