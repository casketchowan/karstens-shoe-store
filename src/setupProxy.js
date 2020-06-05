const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/shoes',
        createProxyMiddleware({
          target: 'http://localhost:5000/',
          changeOrigin: true,
        })
      );
    };