const proxy = [
    {
      context: '/resources',
      target: 'http://localhost:8080/projeto-0.0.1-SNAPSHOT',
      pathRewrite: {'^/resources' : ''},
      secure: false
    }
  ];
  module.exports = proxy;