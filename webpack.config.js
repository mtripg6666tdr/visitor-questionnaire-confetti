const path = require("path");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "./src/entry.ts"),
  output: {
    filename: "visitor-survey-confetti.js",
    path: path.join(__dirname, "./lib"),
    library: "Confetti",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.lib.json"
          }
        }
      }
    ]
  },
}