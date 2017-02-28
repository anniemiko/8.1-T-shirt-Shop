var Backbone = require('backbone');

var CartItem = Backbone.Collection.extend({
  defaults: {
    'qty': 1
  }
});

var CartCollection = Backbone.Collection.extend({
  model: CatalogItem
});

var Cart = Backbone.Model.extend({
  defaults: function(){
    return{
    items: new CartCollection()
    }
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
