import React, { useContext } from "react";
import ShoppingContext from "./ShoppingContext";

const CartCount = () => {
  const shoppingContext = useContext(ShoppingContext);

  return <p>You have {shoppingContext.items.length} items in your cart.</p>;
};

export default CartCount;
