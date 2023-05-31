const { httpProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    httpProxyMiddleware('api', {
      target: 'http://127.0.0.1:8000',
      changOrigin: true,
      ws: true,
      pathRewrite: { '^api': '' },
    })
  );
};
