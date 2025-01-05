
import BookingForm from './BookingForm';

export default function BookingPage({availableTimes, dispatch, submitForm}){
   
   
    return(
    <div className='BookingPage'>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        <img src='./restaurant.jpg'/>
    
    </div>
    )
}