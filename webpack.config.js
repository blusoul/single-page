const path = require('path');

module.exports = {
    entry: './src/',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    watch: true,
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}