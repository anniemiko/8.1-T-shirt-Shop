var Backbone = require('backbone');

var CatalogItem = Backbone.Collection.extend({

});

var CatalogCollection = Backbone.Collection.extend({
  model: CatalogItem
});

module.exports = {
  CatalogItem,
  CatalogCollection
}
