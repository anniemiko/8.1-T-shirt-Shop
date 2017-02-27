var Backbone = require('backbone');

var CartItem = Backbone.Collection.extend({

});

var CartCollection = Backbone.Collection.extend({
  model: CatalogItem
});

module.exports = {
  CartItem,
  CartCollection
}
