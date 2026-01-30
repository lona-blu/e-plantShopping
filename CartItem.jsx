import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your cart is empty 🌱</h2>
        <p>Browse plants and add some to your cart.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />

          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>R{item.price}</p>

            <div className="quantity-controls">
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                −
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                +
              </button>
            </div>

            <button
              className="remove-btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2>Total: R{totalPrice}</h2>

      <button
        className="clear-cart-btn"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartItem;

