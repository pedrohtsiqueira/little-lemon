import HomePage from './HomePage';
import BookingPage from './BookingPage';
import About from './About';
import {Routes, Route } from 'react-router-dom';
import { useReducer, useState } from 'react';

const updateTimes = (availableTimes, action) => {
    
    
    return availableTimes;
}

const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}



export default function Main() {
 
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());


    return (
        <main>
                
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Booking" element={<BookingPage availableTimes = {availableTimes} />}/>
            </Routes>

        </main>

    )


}