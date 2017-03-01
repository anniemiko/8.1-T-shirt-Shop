var React = require('react');

var CartCollection = require('../models/catalog.js').CartCollection;
var CartOrderCollection = require('../models/catalog.js').CartOrderCollection;

class CartContainer extends React.Component {
  constructor(props){
    super(props);
    var cart = new CartCollection();
  }
  // addToCart(){
  //   this.add()
  // },
  render(){
    return (
      <div className="cart">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Selection</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Deal Expires</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {/*cartItems*/}
          </tbody>
        </table>
      </div>
    )
  }
}

module.exports = {
  CartContainer
}
