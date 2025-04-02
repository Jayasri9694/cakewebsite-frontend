import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./CakeCard.css";


  const CakeCard = ({ cake }) => {
    const navigate = useNavigate(); 

  const handleViewDetails = () => {
    navigate(`/cakedetails/${cake.id}`); // Navigate to CakeDetails page with cake ID
  };

  return (
    <div className="cake-card">
      <img 
        src={"https://img.freepik.com/premium-photo/chocolate-cake-with-with-berries_127425-305.jpg"} 
        alt={cake.name} 
        className="cake-card-img" 
      />
      <div className="cake-card-info">
        <h3 className="cake-card-title">{cake.name}</h3>
        <p className="cake-card-description">{cake.description}</p>
        <div className="cake-card-footer">
          <p className="cake-card-price">${cake.price}</p>
          <button onClick={handleViewDetails} className="view-details-btn">
            view details
          </button>
        </div>
      </div>
    </div>
  );
};
export default CakeCard;
