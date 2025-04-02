import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CakeCard from "./cakeCard";
import "./CakeList.css";

const CakeList = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/cakes")
      .then((res) => res.json())
      .then((data) => setCakes(data))
      .catch((err) => console.error("Error fetching cakes:", err));
  }, []);

  return (
    <div className="cake-list">
      {cakes.map((cake) => (
        <Link key={cake._id} to={`/cakes/${cake._id}`}>
          <CakeCard cake={cake} />
        </Link>
      ))}
    </div>
  );
};

export default CakeList;
