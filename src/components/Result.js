import React from 'react';

// stateless result component (sfc command)
const  Result = (props) => {

    const { date, err, city, wind, sunset, sunrise, pressure, temp } = props.weather
    
    let content = null;
    // condition for content display (no errors and city name true)
    if(!err && city) {
        // setup for displaying correct time format
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        
        content = (
            <div>
            <h3>Current Weather in: <strong><em>{city}</em></strong></h3>
            <h4>Time & Date: {date}</h4>
            <h4>Temperature: {temp} &#176;C</h4>
            <h4>Pressure: {pressure} hPa</h4>
            <h4>Wind Speed: {wind} m/s</h4>
            <h4>Sunrise: {sunriseTime}</h4>
            <h4>Sunset: {sunsetTime}</h4>
            </div>
        )
    }

    return ( 
        <div className="result">
            {err ? `No match for city "${city}"` : content}
        </div>
       
     );
}
 
export default Result;