import React from 'react';
import './Home.css';

const Home = () => {
    // Expanding the arrays to include more books
    const bestsellers = [
        { title: "The Power Within", author: "Ramesh Shrestha", image: "/assets/book1.jpg" },
        { title: "Code Chronicles", author: "Anita Basnet", image: "/assets/book2.jpg" },
        { title: "Mystery in the Dark", author: "Rajesh Dahal", image: "/assets/book3.jpg" },
        { title: "The Hidden Truth", author: "Maya Thapa", image: "/assets/book4.jpg" },
        { title: "Echoes of Silence", author: "Tara Rathi", image: "/assets/book5.jpg" }
    ];

    const newReleases = [
        { title: "Beyond the Mountains", author: "Kiran Lama", image: "/assets/new1.jpg" },
        { title: "The Silent Sea", author: "Sita Rana", image: "/assets/new2.jpg" },
        { title: "Dawn of Hope", author: "Nirajan Shrestha", image: "/assets/new3.jpg" },
        { title: "Shadows of Fate", author: "Pooja Rai", image: "/assets/new4.jpg" },
        { title: "Whispers in the Wind", author: "Rohit Khadka", image: "/assets/new5.jpg" }
    ];

    const deals = [
        { title: "Rusty Pages", author: "Dipesh Bhattarai", image: "/assets/deal1.jpg" },
        { title: "Mystery Minds", author: "Sujata Aryal", image: "/assets/deal2.jpg" },
        { title: "The Lost Key", author: "Ram Kumar", image: "/assets/deal3.jpg" },
        { title: "The Secret Diary", author: "Jeevan Shrestha", image: "/assets/deal4.jpg" },
        { title: "A Walk in Time", author: "Parbati Koirala", image: "/assets/deal5.jpg" }
    ];

    const renderSection = (title, books) => (
        <div className="section">
            <h2>{title}</h2>
            <div className="book-grid">
                {books.map((book, index) => (
                    <div className="book-card" key={index}>
                        <img src={book.image} alt={book.title} />
                        <div className="info">
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="home">
            <div className="announcement">
                <p>📢 Limited Time Offer: 20% Off All Bestsellers Until Sunday!</p>
            </div>
            {renderSection("🔥 Bestsellers", bestsellers)}
            {renderSection("🆕 New Releases", newReleases)}
            {renderSection("💸 Deals & Discounts", deals)}
        </div>
    );
};

export default Home;
