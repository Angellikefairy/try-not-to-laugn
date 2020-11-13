const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../');

module.exports = {
  context: path.resolve(PROJECT_PATH, 'src'),
  entry: './app.ts',
  output: {
    path: path.resolve(PROJECT_PATH, 'dist'),
    filename: '[name].[chunkhash].bundle.js',
    publicPath: '', // 后续 CDN
    chunkFilename: '[chunkhash].js', // 长效缓存
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true,
            }
          },
          {
            loader: 'css-loader',
            options: {
              alias: {},
              importLoaders: 2,
              modules: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ],
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            }
          }
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(PROJECT_PATH, 'src')
    },
  },
  performance: {
    
  }
}