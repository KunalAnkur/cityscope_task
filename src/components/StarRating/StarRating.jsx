import React, { useState } from 'react';
import "./StarRating.css"
const StarRating = ({disabled = false, value = 0,onChange = () => {}}) => {
    const [rating, setRating] = useState(value);

    const handleStarClick = (newRating) => {
        if (!disabled) {
            setRating(newRating);
            onChange(rating)
        }
    };

    return (
        <div className="star-rating">
            <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={star <= rating ? 'star filled' : 'star'}
                        onClick={() => handleStarClick(star)}
                    >
                        &#9733;
                    </span>
                ))}
            </div>
        </div>
    );
};

export { StarRating };
