exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /canvas/,
          use: loaders.null(),
        },
        {
          test: /\.(pdf)$/,
          use: "file-loader",
        },
      ],
    },
  });
};
