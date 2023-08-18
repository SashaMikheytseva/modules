const path = require('path'); //Node.js модуль для разрешения путей файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {                               
    output: {
        path: path.resolve(__dirname, 'dist')  //путь к результир файлу
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                 test: /\.html$/,
                 use: [
                    {
                        loader: 'html-loader',
                    },
                 ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader, 'css-loader',
                  ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCSSExtractPlugin()
    ]
}