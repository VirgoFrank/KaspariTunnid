const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true
    },
    module:{
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.html$/,
                use: ['raw-loader']
            },
            {
            test:/\.vue/,
            use: ['vue.loader']
            }
        ]
        },
        plugins: [
            new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias:{
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};