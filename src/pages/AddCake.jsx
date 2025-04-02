import React, { useState } from "react";
import "./AddCake.css";

const AddCake = () => {
  const [cakeData, setCakeData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setCakeData({ ...cakeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cake added:", cakeData);
    // Add API call here to send cakeData to the backend
  };

  return (
    <div className="add-cake-container">
      <h2>Add a New Cake</h2>
      <form onSubmit={handleSubmit} className="cake-form">
        <div className="form-group">
          <label>Cake Name</label>
          <input
            type="text"
            name="name"
            value={cakeData.name}
            onChange={handleChange}
            required
            placeholder="Enter cake name"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={cakeData.description}
            onChange={handleChange}
            required
            placeholder="Enter cake description"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Price ($)</label>
          <input
            type="number"
            name="price"
            value={cakeData.price}
            onChange={handleChange}
            required
            placeholder="Enter price"
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={cakeData.imageUrl}
            onChange={handleChange}
            required
            placeholder="Enter image URL"
          />
        </div>

        <button type="submit" className="submit-btn">Add Cake</button>
      </form>
    </div>
  );
};

export default AddCake;
