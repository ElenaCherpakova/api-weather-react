import React from 'react';
import PropTypes from 'prop-types';

import styles from './UpcomingDaysForecastItem.module.css';

const imgUrlBase = 'http://openweathermap.org/img/wn';


const UpcomingDaysForecastItem = ({ weekday, temperature, feels_like, imgUrl }) => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center m-1`}>
        <img className="mb-2" width="70" height="70" src={`${imgUrlBase}/${imgUrl}`} alt="" />
        <span className="mb-2">{weekday}</span>
        <span className="font-weight-bold">{temperature}&deg;</span>
        <span className={styles.feels}>Feels {feels_like}</span>
    </li>
);

UpcomingDaysForecastItem.propTypes = {
    weekday: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    feels_like: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
};

export default UpcomingDaysForecastItem;