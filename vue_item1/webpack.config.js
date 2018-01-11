var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');
module.exports = {
    entry: './src/entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/, use: ['babel-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpg|png|gif|jpeg|svg|ttf|woff|eot)$/, use: ['url-loader'] },
            { test: /\.html$/, use: ['html-loader'] },
            { test: /\.vue$/, use: ['vue-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            minify: {
                removeComments: true, //清除HTML注释
                collapseWhitespace: true, //压缩HTML
                collapseBooleanAttributes: true, //省略布尔属性的值 <input checked='true'/> ==> <input />
                removeEmptyAttributes: true, //删除所有空格作属性值 <input id='' /> ==> <input />
                removeScriptTypeAttributes: true, //删除<script>的type='text/javascript'
                removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type='text/css'
                minifyJS: true, //压缩页面JS
                minifyCSS: true, //压缩页面CSS
            }
        }),
        new UglifyJsWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: __dirname,
        port: 8080,
        open: true
    },
    devtool: "eval",
    resolve: {
        alias: {
            vue: path.join(__dirname, '/node_modules/vue/dist/vue')
        }
    }
}

// 需要下载的包：
// vue axios webpack html-webpack-plugin uglifyjs-webpack-plugin babel-loader babel-core babel-preset-env style-loader css-loader html-loader url-loader