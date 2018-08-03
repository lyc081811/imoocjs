const path = require('path')
const uglify = require('uglifyjs-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
        main2: './src/main2.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    },
    plugins: [
        new uglify()
    ],
    devServer: {
        contentBase: path.resolve('__dirname', '../dist'),
        host: '127.0.0.1',
        compress: true,
        port: 1101
    }
}