import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import FilterBar from '../components/FilterBar';
import './BookCatalog.css';

const BookCatalog = () => {
    // Sample data: In a real app, this would come from an API
    const booksData = [
        { id: 1, title: "Book 1", author: "Author 1", price: 19.99, image: "/images/book1.jpg", genre: "Fiction", rating: 4 },
        { id: 2, title: "Book 2", author: "Author 2", price: 15.99, image: "/images/book2.jpg", genre: "Non-fiction", rating: 5 },
        { id: 3, title: "Book 3", author: "Author 3", price: 22.99, image: "/images/book3.jpg", genre: "Science", rating: 3 },
        { id: 4, title: "Book 4", author: "Author 4", price: 12.99, image: "/images/book4.jpg", genre: "Fiction", rating: 4 },
        { id: 5, title: "Book 5", author: "Author 5", price: 25.99, image: "/images/book5.jpg", genre: "History", rating: 5 },
        // Add more books here as needed
    ];

    const [filteredBooks, setFilteredBooks] = useState(booksData);
    const [sortOption, setSortOption] = useState('title');

    const handleSort = (e) => {
        const option = e.target.value;
        setSortOption(option);
        const sortedBooks = [...filteredBooks].sort((a, b) => {
            if (option === 'price') {
                return a.price - b.price;
            } else if (option === 'rating') {
                return b.rating - a.rating;
            } else {
                return a.title.localeCompare(b.title);
            }
        });
        setFilteredBooks(sortedBooks);
    };

    return (
        <div className="book-catalog">
            <div className="filter-sort-container">
                <FilterBar />
                <div className="sort">
                    <label>Sort by: </label>
                    <select onChange={handleSort} value={sortOption}>
                        <option value="title">Title</option>
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            <div className="book-list">
                {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookCatalog;
