// Storybook + Next
module.exports = {
  test: /\.svg$/,
  enforce: "pre",
  use: [
    {
      loader: "@svgr/webpack",
      options: {
        svgoConfig: {
          plugins: [
            {
              name: "removeViewBox",
              active: false,
            },
          ],
        },
      },
    },
    "file-loader",
  ],
};
