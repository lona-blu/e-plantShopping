import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ REQUIRED: calculate total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // ✅ REQUIRED: increment quantity
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        amount: item.quantity + 1,
      })
    );
  };

  // ✅ REQUIRED: decrement quantity
  const handleDecrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        amount: item.quantity - 1,
      })
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your cart is empty </h2>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />

          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>R{item.price}</p>

            <div className="quantity-controls">
              <button onClick={() => handleDecrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)}>+</button>
            </div>

            <button
              className="remove-btn"
              onClick={() =>
