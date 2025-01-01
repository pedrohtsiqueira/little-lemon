
import BookingForm from './BookingForm';


export default function BookingPage({availableTimes}){
   
   
    return(
    <>
        <BookingForm availableTimes={availableTimes}/>
    </>
    )
}