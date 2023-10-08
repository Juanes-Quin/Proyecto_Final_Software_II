//jsx
import React, { useState } from "react";

const StarRating = ({ totalStars }) => {
 const [selectedStars, setSelectedStars] = useState(0);

 return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, i) => (
        <button
          key={i}
          onClick={() => setSelectedStars(i + 1)}
          style={{ color: "#ff9800" }}
        >
          ★
        </button>
      ))}
      <p>Selected Stars: {selectedStars}</p>
    </div>
 );
};

const RatingForm = () => {
 const [rating, setRating] = useState(0);
 const [comment, setComment] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rating:", rating);
    console.log("Comment:", comment);
 };

 return (
    <form onSubmit={handleSubmit}>
      <StarRating totalStars={5} />
      <br />
      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
 );
};

export default RatingForm;