module.exports = {
  entry: "./entry.mdx",
  output: {
    filename: "out.js",
  },
  target: "web",
  mode: "production",
  // Disable tree shaking
  optimization: {
    usedExports: false,
  },
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: "@mdx-js/loader",
          },
        ],
      },
    ],
  },
};
