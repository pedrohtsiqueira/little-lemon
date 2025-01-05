import {useState} from "react";



export default function BookingForm({availableTimes, dispatch, submitForm}) {
    const style = { 
        display: "grid",
        maxWidth: "200px",
        gap: "20px"
    };
    
    const [date, setDate] = useState("");
    const [time, setTime] = useState(""); 
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    
   

    function handleDate(event) {
        const date = event.target.value;
        setDate(date);
        dispatch({type : date});
    };
    
    function handleTime(event) {
        setTime(event.target.value)
    }

    function handleGuests(event) {
        setGuests(event.target.value)
    }

    function handleOccasion(event) {
        setOccasion(event.target.value)
    }
    
    
    function handleSubmit(event) {
        event.preventDefault();
        submitForm(event);
    }
    

    
    return (
        <form style={style} onSubmit={handleSubmit}>
            <label htmlFor="res-date" >Choose date</label>
            <input type="date" id="res-date" onChange={handleDate} required/>
            <label htmlFor="res-time">Choose time</label>            
            <select id="res-time" onChange={handleTime} required>
                {console.log(availableTimes)}
                {availableTimes.map(time => <option>{time}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleGuests}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={handleOccasion} placeholder='-' >
                <option>-</option>
                <option>Birthday</option>
                <option>Annivesary</option>
            </select>
            <input className="button" type="submit" value="Make your reservation" />
        </form>
    )
}