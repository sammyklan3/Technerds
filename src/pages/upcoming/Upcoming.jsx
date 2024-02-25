import "./upcoming.css";
import { FaCalendarAlt, FaBell } from "react-icons/fa";

export const Upcoming = () => {
    return (
        <div className="upcoming-container">
            <div className="upcoming-header">
                <h2>Events</h2>
                <p><FaCalendarAlt /></p>
            </div>
            <div className="upcoming-content">
                <div className="upcoming-title">
                    <h3>Upcoming</h3>
                </div>

                <ul className="upcoming-content-list">
                    <li>
                        <img src="https://ioflood.com/blog/wp-content/uploads/2023/09/Retrieving-current-directory-in-Python-folder-path-directory-tree-code-logo.jpg" alt="image" />
                        <div className="upcoming-content-list-details">
                            <h3>Introduction to Python</h3>
                            <p>University of Nairobi</p>
                            <p>September 2024</p>
                        </div>
                        <FaBell />
                    </li>

                    <li>
                        <img src="https://media.licdn.com/dms/image/D4D12AQG1IraSKmWNrA/article-cover_image-shrink_720_1280/0/1660638282711?e=2147483647&v=beta&t=1nidMGSKasI2Cu6oKx0VY5FeO_CSbhrEkuxDUzHQJds" alt="image" />
                        <div className="upcoming-content-list-details">
                            <h3>How to start a company</h3>
                            <p>Mount Kenya University</p>
                            <p>September 2024</p>
                        </div>
                        <FaBell />
                    </li>

                    <li>
                        <img src="https://miro.medium.com/v2/resize:fit:1200/1*WA_9JsyqFkge2HwYKcdJQw.png" alt="image" />
                        <div className="upcoming-content-list-details">
                            <h3>Introduction to React JS</h3>
                            <p>United of Eldoret</p>
                            <p>November 2024</p>
                        </div>
                        <FaBell />
                    </li>
                </ul>
            </div>
        </div>
    )
}
