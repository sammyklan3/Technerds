import "./home.css";
import { FiSettings } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

export const Home = () => {
    const [textInput, setTextInput] = useState('');

    // Event handlers to update state when input values change
    const handleTextInputChange = (event) => {
        setTextInput(event.target.value);
    };
    return (
        // Root div
        <div className="events-home-container">
            {/* Events title */}
            <div className="events-title">
                <h2>Events</h2>
                <p><FiSettings /></p>
            </div>
            {/* Search container */}
            <div className="search-container">
                <FiSearch />
                <input type="search" placeholder="Search events" value={textInput}
                    onChange={handleTextInputChange} 
                    name="search"/>
            </div>

            {/* Time selector filter */}
            <div className="time-selector">
                <ul>
                    <li>
                        <p>All</p>
                    </li>
                    <li>
                        <p>Today</p>
                    </li>
                    <li>
                        <p>Tomorrow</p>
                    </li>
                    <li>
                        <p>This weekend</p>
                    </li>
                </ul>
            </div>

            {/* Main content */}
            <div className="events-main-container">
                <ul>
                    <li className="events-main-item">
                        <img src="https://ioflood.com/blog/wp-content/uploads/2023/09/Retrieving-current-directory-in-Python-folder-path-directory-tree-code-logo.jpg" alt="events-main-item-image" />
                        <div className="events-main-item-details">
                            <h3>Introduction to Python</h3>
                            <p>Fri, Dec 2023, 2:00 PM</p>
                            <div className="events-main-item-details-actions">
                                <p>1,100 going . 2,000 interested</p>
                                <button type="button" className="events-main-item-details-actionsBtn">
                                    <p>Interested</p>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
