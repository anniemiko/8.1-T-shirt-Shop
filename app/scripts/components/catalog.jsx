var React = require('react');

var CatalogCollection = require('../models/catalog.js').CatalogCollection;
var CartCollection = require('../models/cart.js').CartCollection;
var Cart = require('../models/cart.js').Cart;


class ShopContainer extends React.Component {
  constructor(props){
    super(props);
    var catalog = new CatalogCollection();
    var cartCollection = new CartCollection();
    var cart = new Cart();
    catalog.add([
      {'name': 'tee #1', 'caption': 'This t-shirt is amazing.', 'image': ''},
      {'name': 'tee #2', 'caption': 'This t-shirt is also amazing.', 'image': ''},
      {'name': 'tee #3', 'caption': 'This t-shirt not so much.', 'image': ''}
    ]);

    this.state = {
      catalog,
      cart,
      cartCollection
    }

  }
  render(){
    return(
    <div>
      <CatalogContainer cart={this.props.cart} />
    </div>
  )
  }
};

class CatalogContainer extends React.Component {
  addToCart(){
    localStorage.setItem('cart', JSON.stringify(cart.toJSON()));
  }
  render(){
    return(
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src="{this.props.image}" alt="..."/>
          <div className="caption">
            <h3>{this.props.name}</h3>
            <p>{this.props.caption}</p>
            <div className="btn-group">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Size <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#">Small</a></li>
                <li><a href="#">Medium</a></li>
                <li><a href="#">Large</a></li>
                <li><a href="#">Extra Large</a></li>
              </ul>
              </div>
             <a href="#" onClick={()=>{this.addToCart}} className="btn btn-default" role="button">Add to Cart</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src="{this.props.image}" alt="..."/>
          <div className="caption">
            <h3>{this.props.name}</h3>
            <p>{this.props.caption}</p>
            <div className="btn-group">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Size <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#">Small</a></li>
                <li><a href="#">Medium</a></li>
                <li><a href="#">Large</a></li>
                <li><a href="#">Extra Large</a></li>
              </ul>
              </div>
             <a href="#" className="btn btn-default" role="button">Add to Cart</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src="{this.props.image}" alt="..."/>
          <div className="caption">
            <h3>{this.props.name}</h3>
            <p>{this.props.caption}</p>
            <div className="btn-group">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Size <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#">Small</a></li>
                <li><a href="#">Medium</a></li>
                <li><a href="#">Large</a></li>
                <li><a href="#">Extra Large</a></li>
              </ul>
              </div>
             <a href="#" className="btn btn-default" role="button">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}



module.exports = {
  ShopContainer
}
