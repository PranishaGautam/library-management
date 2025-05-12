import React from 'react';
import './FilterBar.css';

const FilterBar = () => {
    return (
        <div className="filter-bar">
            <div className="filter-item">
                <label>Genre: </label>
                <select>
                    <option value="all">All</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-fiction</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                </select>
            </div>

            <div className="filter-item">
                <label>Price: </label>
                <select>
                    <option value="all">All</option>
                    <option value="under-20">Under $20</option>
                    <option value="20-50">$20 - $50</option>
                    <option value="50+">Over $50</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;
