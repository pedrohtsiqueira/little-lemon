import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <nav>
            <ul>
                <Link to="/" className="nav-item">Home</Link> 
                <Link to="/About" className="nav-item">About</Link>
                <Link to="/Menu" className="nav-item">Menu</Link>
                <Link to="/Booking" className="nav-item">Reservations</Link>
                <Link to="/Order" className="nav-item">Order Online</Link>
                <Link to="/Login" className="nav-item">Login</Link>
            </ul>
        </nav>
    );

}