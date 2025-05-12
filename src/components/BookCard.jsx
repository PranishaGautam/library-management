import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <img src={book.image} alt={book.title} />
            <div className="book-info">
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <p>${book.price}</p>
                <p>Rating: {book.rating}⭐</p>
            </div>
        </div>
    );
};

export default BookCard;
