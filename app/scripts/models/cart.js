var Backbone = require('backbone');
Backbone.LocalStorage = require("backbone.localstorage");

var CartItem = Backbone.Collection.extend({
  defaults: {
    'name': 'name',
    'qty': 1,
    'size': ''
  }
});

var CartCollection = Backbone.Collection.extend({
  model: CartItem
});

var Cart = Backbone.Model.extend({
  defaults: function(){
    return{
    items: new CartCollection()
    }
  },
  parse: function(data){
    data.items = new CartCollection(data.items);
    return data;
  },
  localStorage: new Backbone.LocalStorage('Cart')
});

var CartOrderCollection = Backbone.Collection.extend({
  model: Cart
})

module.exports = {
  CartItem,
  CartCollection,
  Cart,
  CartOrderCollection
}
