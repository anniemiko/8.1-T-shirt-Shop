var Backbone = require('backbone');

var CatalogItem = Backbone.Collection.extend({
  defaults: {
    'name': 't-shirt',
    'caption': 'cool t-shirt',
    'image': 'https://unsplash.it/300/300/?random'
  }
});

var CatalogCollection = Backbone.Collection.extend({
  model: CatalogItem
});

module.exports = {
  CatalogItem,
  CatalogCollection
}
