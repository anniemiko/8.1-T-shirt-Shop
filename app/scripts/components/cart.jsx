var React = require('react');

var CartCollection = require('../models/catalog.js').CartCollection;

class CartContainer extends React.Component {
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
