const createReviews = function() {
    const reviews = document.createElement('div');
    reviews.className = 'reviews';
    const header = document.createElement('h3');
    header.innerText = 'Customer Reviews';
    reviews.appendChild(header);

    const reviewOne = document.createElement('p');
    reviewOne.innerText = "I really love your coffee. I'll be back every single day until I drop dead of a caffeine overdose  - Janey-E";
    reviews.appendChild(reviewOne);
    
    
    return reviews;
}

export { createReviews };