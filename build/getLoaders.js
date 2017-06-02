const ExtractTextPlugin = require('extract-text-webpack-plugin')

function getLoaders(env) {
  const loaders = []

  const styleLoader = {
    use: {
      loader: 'css-loader',
      options: {
        minify: env === 'development' ? false : {
          autoprefixer: false
        }
      }
    }
  }

  loaders.push(
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract(styleLoader)
    }
  )

  return loaders
}

module.exports = getLoaders
