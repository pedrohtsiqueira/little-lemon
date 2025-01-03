import HomePage from './HomePage';
import BookingPage from './BookingPage';
import About from './About';
import {Routes, Route } from 'react-router-dom';
import { useReducer, useState } from 'react';













export default function Main() {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };




    const updateTimes = (availableTimes, action) => {
    
        
        
        return fetchAPI(new Date(action.type));
    }
    
    const initializeTimes = () => {

        return fetchAPI(new Date());
    
    }


    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    

    console.log(availableTimes)

    return (
        <main>
                
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Booking" element={<BookingPage availableTimes = {availableTimes} dispatch={dispatch} />}/>
            </Routes>

        </main>

    )


}