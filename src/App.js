import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";
import Login from "./context/Login";
import ShoppingContext from "./context/ShoppingContext";
import Cart from "./context/Cart";
import CartCount from "./context/CartCount";

class App extends Component {
  handleLogIn = () => {
    const user = { name: "Mosh" };
    this.setState({ currentUser: user });
  };

  handleLogOut = () => {
    this.setState({ currentUser: { name: "<Logged out>" } });
  };

  handleAddCartItem = item => {
    const items = [...this.state.cartItems];
    items.push(item);
    this.setState({ cartItems: items });
  };

  handleRemoveCartItem = id => {
    const items = this.state.cartItems.filter(i => i.id !== id);
    this.setState({ cartItems: items });
  };

  state = {
    currentUser: { name: "<Logged out>" },
    cartItems: []
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          handleLogIn: this.handleLogIn,
          handleLogOut: this.handleLogOut
        }}
      >
        <ShoppingContext.Provider
          value={{
            items: this.state.cartItems,
            handleAddCartItem: this.handleAddCartItem,
            handleRemoveCartItem: this.handleRemoveCartItem
          }}
        >
          <MoviePage />
          <Login />
          <Cart />
          <CartCount />
        </ShoppingContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
