const path = require('path')
const getPlugins = require('./getPlugins')
const getLoaders = require('./getLoaders')

function getConfiguration(env) {
  const configuration = {
    entry: './src/main.js',
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, '../dist')
    },
    module: {
      rules: getLoaders(env)
    },
    plugins: getPlugins(env)
  }

  return configuration
}

module.exports = getConfiguration
