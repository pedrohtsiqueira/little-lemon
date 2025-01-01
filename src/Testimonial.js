import Ranking from './Ranking'; 


export default function Testimonial(props) {
   
    return(
        <div className='Testimonial'>
            <Ranking value = {props.rank} />
            <div className='identifier'>
                <img className= 'photo' src={props.photo}/>
                <h5>{props.name}</h5>
            </div> 
            <p>{props.details}</p>
        </div>
    )
}