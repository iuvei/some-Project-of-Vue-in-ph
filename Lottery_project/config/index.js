// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
module.exports = {
  build: {
    env: require('./prod.env'),
    port: 8088,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',// update 2017/11/23  add /  解决路径问题
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8088,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {

    },
    /*proxyTable: {
      "/apis": {
        target: "http://pay.xunyinpay.cn/bank/index.aspx",
        // logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      }
    },*/
    /*proxyTable: {
      firstProxy: {
        target: "http://messenger.providesupport.net/messenger/1banow2eoa1f4196zvimy7t0oz.h.com",
        filter(pathname, req) {
          // console.info('firstProxy',req)
          const isApi = pathname.indexOf('/apis') == 0;
          const ret = isApi;
          return ret;
        },
        changeOrigin: true,
      },
    },*/

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false // update 20180127
  }
}
