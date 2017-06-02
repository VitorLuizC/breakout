const path = require('path')
const { DefinePlugin, optimize } = require('webpack')
const { UglifyJsPlugin } = optimize
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function getPlugins(env) {
  const plugins = []

  plugins.push(
    new HtmlPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new ExtractTextPlugin('css/style.css')
  )

  if (env === 'production')
    plugins.push(
      new DefinePlugin({
        'process.env': {
          ENV: '\'production\''
        }
      }),
      new UglifyJsPlugin()
    )

  return plugins
}

module.exports = getPlugins
