require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST,
  apiPort: process.env.APIPORT,
  app: {
    title: 'ReactTestReq',
    description: 'ReactTestReq',
    head: {
      titleTemplate: 'ReactTestReq: %s',
      meta: [
        {name: 'description', content: 'ReactTestReq'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'ReactTestReq'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'ru_RU'},
        {property: 'og:title', content: 'ReactTestReq'},
        {property: 'og:description', content: 'ReactTestReq'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@nightfury2'},
        {property: 'og:creator', content: '@nightfury2'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
