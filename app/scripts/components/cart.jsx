var React = require('react');

var CartCollection = require('../models/catalog.js').CartCollection;

class CartContainer extends React.Component {
  render(){
    return (
      <div className="cart">
        <table className="table table-striped">
            <th>Selection</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Deal Expires</th>
            <th>Remove</th>
            <tbody>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
        </table>
      </div>
    )
  }
}

module.exports = {
  CartContainer
}
