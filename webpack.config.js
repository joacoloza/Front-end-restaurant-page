const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',  
  entry: './src/index.js',
  devtool:'source-map',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
  devServer:{
    static:{
      directory:path.resolve(__dirname,'dist')
    },
    port:3000,
    open:true,
    hot:true,
    compress:true, 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  } ,
  plugins : [
    new HtmlWebpackPlugin({
        title:'Restaurant Page' ,
        template:'./src/index.html',
        filename:'index.html',
    }),
  ]

};