import React, { useState } from 'react'
import './App.css'




function App() {
    const apiKey = '1126ea142dfe633b53a669936a917613';
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("");

    const getWeather = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                }
            )
        }
    }

    return (
        <div className='container'>
            <input
                className='input'
                placeholder="Enter City..."
                onChange={e => setCity(e.target.value)}
                value={city}
                onKeyPress={getWeather}
            />

            {typeof weatherData.main === 'undefined' ? (
                <div>
                    <p>Welcome to the weather app! Enter in a city to get its weather.</p>
                </div>
            ) : (
                <div className='weather-data'>
                    <p className='city'>{weatherData.name}</p>
                    <p className='temp'>{Math.round(weatherData.main.temp)} °F</p>
                    <p className='weather'>{weatherData.weather[0].main}</p>
                </div>
            )}
            {weatherData.cod === "404" ? (
                <p>City not found.</p>) : (
                    <>
                    </>
            )}
            </div>
  )
}

export default App
