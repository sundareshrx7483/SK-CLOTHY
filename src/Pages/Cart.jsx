import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../SLICES/cartSlice";
import "../CSS/cart.css"; // Import the CSS file for styling and animations

const Cart = () => {
  const cartItems = useSelector((state) => state.cartInfo.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemIndex) => {
    dispatch(removeFromCart(itemIndex));
  };

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your Cart Is Empty!</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <h3 className="item-name">{item.pname}</h3>
            <h3 className="item-price">₹{item.price}</h3>
            <button className="remove-button" onClick={() => handleRemoveItem(index)}>
              Remove
            </button>
            <button className="buy-button">BUY</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
