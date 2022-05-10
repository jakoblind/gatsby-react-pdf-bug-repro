exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    ...(stage === "build-html"
      ? {
          module: {
            rules: [
              {
                test: /canvas/,
                use: loaders.null(),
              },
            ],
          },
        }
      : {}),
  });
};
