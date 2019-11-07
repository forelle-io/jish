const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  webpack: (config, options) => {

    return config
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1
  }
})