import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <nav>
            <ul>
                <Link to="/" className="nav-item">Home</Link> 
                <Link to="/About" className="nav-item">About</Link>
                <li className="nav-item">Menu</li>
                <Link to="/Booking" className="nav-item">Reservations</Link>
                <li className="nav-item">Order Online</li>
                <li className="nav-item">Login</li>
            </ul>
        </nav>
    );

}