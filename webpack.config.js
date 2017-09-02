const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./index.js',//入口文件只有一个，叫index.js
    // entry:['./index1.js','./index2.js','./index3.js'],//入口文件有三个，分别是index1.js,index2.js,index3.js,像这样的写法，最只会产生一个output文件
    // entry:{//像这样写，如果output设置的是[name].js或者[chunkhash].js,则会产生多个output文件
    //     a:'./index4.js',
    //     b:'./index5.js'
    // },
    output:{
        path:path.resolve(__dirname,'dist'),
        // filename:'bundle.js',
        // filename:'[name].js',
        filename:'[hash].js',//文件名是一个hash值
        // publicPath:'/assets/',
    // publicPath:"",
    // publicPath:"http://cdn.example.com/assets/"//供像webpack-html-plugin之类的使用的
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test:/\.less$/,
                use: [ 'style-loader', 'css-loader','less-loader' ]
            },
            {
                test:/\.scss$/,
                use: [ 'style-loader', 'css-loader','sass-loader' ]
            },
            {
                test:/\.(gif)|(jpg)|(png)$/,
                use:['file-loader','url-loader?limit=8192']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'测试标题',
            template: 'tpl.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}