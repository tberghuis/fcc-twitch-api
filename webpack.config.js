
var path = require('path');

module.exports = {
    entry: {
        bundle: ['./src/index.jsx'],
        tmp: ['./tmp/tmp.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        }]
    }
};
