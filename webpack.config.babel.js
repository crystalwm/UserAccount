import path from 'path';

module.exports = {
    entry: {
        polyfills: [
            path.resolve(__dirname, 'node_modules/core-js/client/shim.min.js'),
            path.resolve(__dirname, 'node_modules/zone.js/dist/zone.js'),
            path.resolve(__dirname, 'node_modules/reflect-metadata/Reflect.js'),
            path.resolve(__dirname, 'node_modules/systemjs/dist/system.src.js')
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: ['node_modules'],
            loader: 'babel',
            query: {
                babelrc: false,
                presets: [
                    ['es2015', { modules: false }],
                ],
            },
        }]
    }
}