var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone')

var ShopContainer = require('./components/catalog.jsx').ShopContainer;
var CartContainer = require('./components/cart.jsx').CartContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'cart': 'cart'
  },
  index: function(){
      ReactDOM.render(
      React.createElement(ShopContainer),
      document.getElementById('app')
    );
  },
  cart: function(){
    ReactDOM.render(
      React.createElement(CartContainer, {router: this}),
      document.getElementById('app')
    );
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
