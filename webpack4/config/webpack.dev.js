const path = require('path')
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
    module: {},
    plugins: [],
    devServer: {
        contentBase: path.resolve('__dirname', '../dist'),
        host: '127.0.0.1',
        compress: true,
        
    }
}