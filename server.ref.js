import Koa from 'koa'
import path from 'path'
import bodyParser from 'koa-bodyparser'
import send from 'koa-send'
import serve from 'koa-static'
import staticCache from 'koa-static-cache'
import routes from './server/routes'

// Constants
const PORT = process.env.EXPOSE_PORT || 8080

// Env
const PROD = process.env.NODE_ENV === 'production';

console.log("PROD:" + PROD);
console.log("PORT:" + PORT);

const app = new Koa()

app.use(bodyParser())

// Production
if (PROD) {
    // Serve static assets
    app.use(staticCache(path.join(__dirname, 'assets'), {
        prefix: "/assets/"
    }))

    // Serve dist folder
    app.use(serve(path.join(__dirname, 'dist')))

    // History fall back
    app.use(async function(ctx, next) {
        return send(ctx, '/index.html', {
                root: path.join(__dirname, 'dist')
            })
            .then(() => next())
    })
} else {
    // Development
    const webpack = require('webpack')
    const WebpackDevServer = require("webpack-dev-server")
    const config = require('./webpack.config.babel')()
    const browserSync = require('browser-sync').create()
    const stripAnsi = require('strip-ansi')

    // Hot reload
    config.entry.app.unshift("webpack-dev-server/client?http://localhost:4000/", "webpack/hot/dev-server")
    config.entry.polyfills.unshift("webpack-dev-server/client?http://localhost:4000/", "webpack/hot/dev-server")

    const compiler = webpack(config)

    var server = new WebpackDevServer(compiler, {
        hot: true,
        quiet: true,
        noInfo: false,
        stats: { colors: true },
        historyApiFallback: true,
        clientLogLevel: "warning",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },

        // Combining with an existing Koa server
        proxy: {
            '/api': {
                target: `http://localhost:${PORT}`,
                secure: false
            }
        }
    })

    compiler.plugin('done', function(stats) {
        if (stats.hasErrors() || stats.hasWarnings()) {
            return browserSync.sockets.emit('fullscreen:message', {
                title: "Webpack Error:",
                body: stripAnsi(stats.toString()),
                timeout: 100000
            })
        }
        browserSync.reload()
    })

    // Webpack dev server
    server.listen(4000)

    browserSync.init({
        proxy: "localhost:4000"
    })


    const notify = (file) => browserSync.notify(`File changed! Compiling... please wait!`)

    browserSync.watch("src/**/*.html").on("change", notify)
    browserSync.watch("src/**/*.ts").on("change", notify)
    browserSync.watch("src/**/*.css").on("change", notify)
    browserSync.watch("assets/styles/*.css").on("change", notify)
}

// Routes
app.use(routes)

// Koa server
app.listen(PORT)

export default app