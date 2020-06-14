import * as path from "path"
import * as webpack from "webpack"

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: 'umd'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
    alias: {
      'react': path.resolve(__dirname, '../app/node_modules/react/'),
      'react-dom': path.resolve(__dirname, '../app/node_modules/react-dom/')
    }
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ]
  },
  externals: ['react', 'react-dom']
}

export default config