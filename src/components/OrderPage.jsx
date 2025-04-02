import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderPage.css";

const OrderPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handlePlaceOrder = () => {
    alert("Your order has been placed successfully!");
    navigate("/cakes"); // Redirect to Cake List page
  };

  return (
    <div className="order-container">
      <h2>Confirm Your Order</h2>
      <p>Review your order and click the button to place it.</p>
      <button onClick={handlePlaceOrder} className="order-btn">
        Place Your Order
      </button>
    </div>
  );
};

export default OrderPage;
