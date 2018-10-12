const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.scss$/,
        loader: "sass-loader",
        // options: {
        //   importer: jsonImporter(),
        // },
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([ {
      from: 'src/*.json',
      flatten: true,
      transform (content, path) {
        return content
      }
    } ], {}),
    new CopyWebpackPlugin([ {
      from: 'src/*.scss',
      flatten: true,
      transform (content, path) {
        return content
        
        sassport().render({
          file: path
        }, function(err, result) {
          console.log(result.css.toString())
         return result.toString();
          // ... or whatever you want to do with the result
        });
        // return content
      }
    } ], {})
  ],
  externals: {
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};