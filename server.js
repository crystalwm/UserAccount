  const webpack = require('webpack');
  const WebpackDevServer = require("webpack-dev-server");
  const config = require('./webpack/webpack.dev.js')();

  const compiler = webpack(config);

  compiler.run((err, stats) => {
      if (err) {
          console.log("webpack compiler err:\n");
          console.log(err);
      }

      console.log("webpack the project ");
  });


  /*
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
          }
      });

      // Webpack dev server
      server.listen(4005)
      */