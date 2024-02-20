import "./home.css";
import { FiSettings } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

export const Home = () => {
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
                <input type="search" placeholder="Search events" />
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
                </ul>
            </div>
        </div>
    )
}
