const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: {
        index:'./src/index.js',
    },
    output: {
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    mode:"production",
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000,
    // },
    plugins:[
       new HtmlWebpackPlugin({
           title:"音乐播放器",
           filename:"index.html",
           template:"./template/template.html",
       })
    ],
    //压缩代码
    optimization:{
        minimize: true,
    },
    watch: true, //用来执行热更新
    externals: ['.js', '.json', '.vue', '.css', '.html','.less'],
} 