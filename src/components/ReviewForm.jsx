import { useState } from "react";

const ReviewForm = ({ cakeId }) => {
  const [review, setReview] = useState({ rating: "", comment: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/api/reviews/${cakeId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });
    alert("Review submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" min="1" max="5" placeholder="Rating (1-5)" onChange={(e) => setReview({ ...review, rating: e.target.value })} required />
      <textarea placeholder="Comment" onChange={(e) => setReview({ ...review, comment: e.target.value })} />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
