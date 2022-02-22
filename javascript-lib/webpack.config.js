const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'calculator.js',
    library: {
      name: 'calculator',
      type: 'umd',
    },
  },
}
