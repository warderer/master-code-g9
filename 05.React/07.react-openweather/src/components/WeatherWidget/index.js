import React from 'react';
import './weatherWidget.css';
import FeatherIcon from 'feather-icons-react';

function weatherWidget({ weatherData }) {

    // Obtener la fecha actual
    let newDate = new Date();
    let month = newDate.getMonth() + 1; //Regresa el Mes Actual
    let year = newDate.getFullYear(); //Año actual del
    let dayNumber = newDate.getDay(); // Valor númerico del día de la semana. Empieza con 0 que es Domingo, Lunes es 1
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

    return (
        <>
            <div className="container">
                <div className="weather-side">
                    <div className="weather-gradient"></div>
                    <div className="date-container">
                        <h2 className="date-dayname">{days[dayNumber]}</h2>
                        <span className="date-day">{month} {year}</span>
                        <FeatherIcon className="location-icon" icon="map-pin" />
                        <span className="location">{weatherData.name}, {weatherData.sys.country}</span>
                    </div>
                    <div className="weather-container">
                        <img className="weather-icon"
                            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                            alt="weather status icon"
                        />
                        <h1 className="weather-temp">{weatherData.main.temp} °C</h1>
                        <h3 className="weather-desc">{weatherData.weather[0].description}</h3>
                    </div>
                </div>
                <div className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div className="precipitation"> <span className="title">PRESIÓN</span><span className="value">{weatherData.main.pressure} %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="humidity"> <span className="title">HUMEDAD</span><span className="value">{weatherData.main.humidity} %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"> <span className="title">VIENTO</span><span className="value">{weatherData.wind.speed} km/h</span>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="week-container">
                        <ul className="week-list">
                            <li className="active"><i className="day-icon" data-feather="sun"></i><span className="day-name">Tue</span><span className="day-temp">29°C</span></li>
                            <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">Wed</span><span className="day-temp">21°C</span></li>
                            <li><i className="day-icon" data-feather="cloud-snow"></i><span className="day-name">Thu</span><span className="day-temp">08°C</span></li>
                            <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>
                            <div className="clear"></div>
                        </ul>
                    </div>
                    <div className="location-container">
                        <button className="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default weatherWidget;