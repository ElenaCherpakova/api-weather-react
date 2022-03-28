import React from 'react';
import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';
import PropTypes from 'prop-types';

const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => (
    <div className={styles.container}>
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>

        <div className={styles.cardInner}>
            <div>
                <h2 className="font-weight-bold mb-3">{weekday}</h2>
                <p className={styles.date}>{date}</p>
                <p className={styles.main}>
                    <img  className="m-2" width="15" height="20" src={locationIcon} alt="location pin icon" />
                    <span className={styles.cityLocation}>{location}</span>
                </p>
            </div>
            <div className={styles.dayForecast}>
                <img width="45" src={weatherIcon} alt="" />
                <h2 className="font-weight-bold mb-2">
                    <span>{temperature}</span>°C
                </h2>
                <h5>{weatherDescription}</h5>
            </div>
        </div>
    </div>
);

CurrentDay.propTypes = {
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weatherDescription: PropTypes.string.isRequired,
};

export default CurrentDay;
