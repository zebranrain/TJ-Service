const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const PUBLIC_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            },
          },
        ]
      },
    ]
  },
  devServer: {
    // historyApiFallback: true,
    // contentBase: PUBLIC_DIR,
    // proxy: {
    //   '/api/analystdata': {
    //     target: 'http://localhost:3001',
    //   }
    // }
  }
};