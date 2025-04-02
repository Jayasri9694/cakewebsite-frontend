import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./CartPage.css";
const CartPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate(); // Initialize navigation

  const handleProceedToOrder = () => {
    navigate("/order"); // Navigate to Order Page
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((cake, index) => (
              <li key={index}>{cake.name} - ${cake.price}</li>
            ))}
          </ul>
          <button onClick={handleProceedToOrder} className="checkout-btn">
            Place Your Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
