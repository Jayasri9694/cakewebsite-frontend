import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import "./CakeDetails.css";
const API_BASE_URL = "https://cakewebsite-backend.onrender.com";
const CakeDetails = () => {
  const { id } = useParams(); // Get cake ID from URL
  const navigate = useNavigate(); // Navigation hook
  const { addToCart } = useCart(); // Use cart context

  const [cake, setCake] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch cake details from backend (Ensure API is correct)
    fetch(`${API_BASE_URL}/api/cakes/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Cake not found");
        }
        return res.json();
      })
      .then((data) => {
        setCake(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(cake);
    navigate("/cart"); // Redirect to cart after adding
  };

  if (loading) {
    return <p className="loading">Loading cake details...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="cake-details">
      <img src={cake.image || "https://img.freepik.com/premium-photo/chocolate-cake-with-with-berries_127425-305.jpg"} alt={cake.name} className="cake-details-img" />
      <h2>{cake.name}</h2>
      <p className="cake-description">{cake.description}</p>
      <p><strong>Flavor:</strong> {cake.flavor}</p>
      <p><strong>Size:</strong> {cake.size} inches</p>
      <p><strong>Ingredients:</strong> {cake.ingredients?.join(", ") || "Not Available"}</p>
      <p className="cake-price">Price: ${cake.price}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      <button className="back-btn" onClick={() => navigate("/")}>Back to Cakes</button>
    </div>
  );
};

export default CakeDetails;
