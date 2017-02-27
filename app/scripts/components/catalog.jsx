var React = require('react');

var CatalogCollection = require('../models/catalog.js').CatalogCollection;


class ShopContainer extends React.Component {
  constructor(props){
    super(props);
    var catalog = new CatalogCollection();
  }
  render(){
    return(
    <div>
      <CatalogContainer />
    </div>
  )
  }
};

class CatalogContainer extends React.Component {
  render(){
    return(
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src="https://unsplash.it/300/300/?random" alt="..."/>
          <div className="caption">
            <h3>T-shirt Title</h3>
            <p>This t-shirt is amazing.</p>
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
          <img src="https://unsplash.it/300/300/?random" alt="..."/>
          <div className="caption">
            <h3>T-shirt Title</h3>
            <p>This t-shirt is amazing.</p>
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
          <img src="https://unsplash.it/300/300/?random" alt="..."/>
          <div className="caption">
            <h3>T-shirt Title</h3>
            <p>This t-shirt is amazing.</p>
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
