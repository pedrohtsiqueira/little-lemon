import { Link } from "react-router-dom";


export default function CardMenu (props) {
    
    
    return (
        <div className="Card">
            <img src={props.img}/>
            <div className="content">
                <div>
                    <h4>{props.name}</h4>
                    <p className="price">${props.price}</p>
                </div>
                <p>{props.description}</p>
                <a>order a delivery</a>
            </div>
        </div>
    )
}