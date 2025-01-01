import {Link} from "react-router-dom";


export default function CallToAction () {
    return(
        <div className= "CallToAction">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="\Booking"><button>Reserve a Table</button></Link>
            </div> 
            <img src = '.\restaurantfood.jpg'/>
        </div>
    )
}