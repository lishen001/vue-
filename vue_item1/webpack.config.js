const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const url = require('url');
const fs = require('fs');
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
            // minify: {
            //     removeComments: true, //清除HTML注释
            //     collapseWhitespace: true, //压缩HTML
            //     collapseBooleanAttributes: true, //省略布尔属性的值 <input checked='true'/> ==> <input />
            //     removeEmptyAttributes: true, //删除所有空格作属性值 <input id='' /> ==> <input />
            //     removeScriptTypeAttributes: true, //删除<script>的type='text/javascript'
            //     removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type='text/css'
            //     minifyJS: true, //压缩页面JS
            //     minifyCSS: true, //压缩页面CSS
            // }
        }),
        // new UglifyJsWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: __dirname,
        port: 8080,
        open: true,
        setup(app) {

            const dataBase = {
                fllist: [
                    { type: "美食" },
                    { type: "早餐" },
                    { type: "商超便利" },
                    { type: "果蔬生鲜" },
                    { type: "大牌5折" },
                    { type: "甜品饮品" },
                    { type: "医药健康" },
                    { type: "浪漫鲜花" },
                    { type: "麻辣烫" },
                    { type: "地方菜系" },
                    { type: "披萨意面" },
                    { type: "新店特惠" }
                ]
            }

            const fllist = dataBase['fllist'];

            for (let i = 0, len = fllist.length; i < len; i++) {
                let imageData = fs.readFileSync('./src/img/' + (i + 1) + '.png');
                let imageBuffer = new Buffer(imageData);
                let imageBase64 = 'data:image/png;base64,' + imageBuffer.toString('base64');
                fllist[i].image = imageBase64;
            }

            app.get('/mock/*', (req, res) => {
                const urlObj = url.parse(req.url);
                console.log(urlObj.pathname);
                switch (urlObj.pathname) {
                    case '/mock/getfoodtypelist':
                        res.setHeader('content-type', 'application/json;charset=utf-8');
                        res.write(JSON.stringify(dataBase['fllist']));
                        res.end();
                        break;
                    default:
                        res.end('This interface has not been provided.');
                        break;
                }
            })
        }
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