import React from 'react';
import './Rating.css';

function Rating({ rating }) {
    const totalStars = 5;
    //we need to map the rating with star but maping i sdone on array 
    //we need to convert the rating int to array 
    // Calculate how many full stars to display (e.g., floor(4.5) = 4 full stars)
    const fullStars = Math.floor(rating);

    // Check if there’s a half star (e.g., 4.5 has 1 half star)
    const hasHalfStar = rating - fullStars >= 0.5;

    // Calculate how many empty stars to complete a total of 5 stars
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className='gameRating'>
            {/* 
        Generate full stars using [...Array(fullStars)].
        Explanation:
        - Array(n) creates an empty array with length n, like [ <n empty items> ]
        - [...Array(n)] spreads it into an iterable array: [undefined, undefined, ...]
        - We use `.map()` just to repeat the icon 'n' times.
        - We don’t care about actual array elements — only the index is needed for 'key'.
      */}
            {[...Array(fullStars)].map((_, index) => (
                <i  key={`full-${index}`} className="bi bi-star-fill"></i>
            ))}

            {/* Render half star only if the rating includes a .5 */}
            {hasHalfStar && <i className="bi bi-star-half"></i>}

            {/* 
        Render empty stars to fill up the remaining positions.
        Again, using [...Array(emptyStars)] for repeat logic.
      */}
            {[...Array(emptyStars)].map((_, index) => (
                <i key={`empty-${index}`} className="bi bi-star"></i>
            ))}
        </div>
    );
}

export default Rating;
