import React, { Component, Fragment } from "react";
import ShoppingContext from "./ShoppingContext";

class Cart extends Component {
  static contextType = ShoppingContext;
  state = { name: null };

  handleAddCartItem = () => {
    const { name } = this.state;

    this.context.handleAddCartItem({
      id: name,
      name
    });

    this.setState({ name: null });
  };

  render() {
    const { name } = this.state;
    return (
      <Fragment>
        <h1>Cart</h1>
        <ul>
          {this.context.items.map(item => (
            <li key={item.id}>
              {item.name}{" "}
              <button
                onClick={() => this.context.handleRemoveCartItem(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <label>
          Add product
          <input
            type="text"
            value={this.state.name}
            onChange={value =>
              this.setState({ name: value.currentTarget.value })
            }
          />
        </label>
        <button onClick={this.handleAddCartItem}>Add product</button>
      </Fragment>
    );
  }
}

export default Cart;
