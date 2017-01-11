//import path from 'path';
var path=require('path');

module.exports = {
    entry: {
        polyfills: [
            path.resolve(__dirname, 'node_modules/core-js/client/shim.min.js'),
            path.resolve(__dirname, 'node_modules/zone.js/dist/zone.js'),
            path.resolve(__dirname, 'node_modules/reflect-metadata/Reflect.js'),
            path.resolve(__dirname, 'node_modules/systemjs/dist/system.src.js')
        ],
        vender:['./client/app/vender.ts'],
        app:['./client/app/main.ts']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      extensions: ['.ts', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: ['node_modules'],
            loader: 'babel-loader',
            query: {
                babelrc: false,
                presets: [
                    ['es2015', { modules: false }],
                ],
            },
        },
           {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
        {
       test: /\.html$/,
          use: [{
            loader: 'raw-loader',
          }],
          include: [path.resolve(__dirname, 'client', 'app')]

      },
     {
          test: /\.css$/, 
          use: [{
            loader: 'to-string-loader'
          }, {
            loader: 'css-loader'
          }],
          include: path.resolve(__dirname, 'client', 'app')
        }
 
        ]
    },
    node: {
      fs: "empty"
   }
}