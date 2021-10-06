const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  lessVarsFilePath: './styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: true,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  webpack(config) {
    return config;
  },

  images: {
    domains: ['localhost'],
  },
  reactStrictMode: true,
});