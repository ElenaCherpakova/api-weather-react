import React from "react";
import UpcomingDaysForecastItem from "../UpcomingDaysForecastItem/UpcomingDaysForecastItem";
import styles from "./UpcomingDaysForecast.module.css";

const UpcomingDaysForecast = ({ days }) => (
  <ul className={`${styles.weekList} d-flex justify-content-between`}>
    {days.map((day) => (
      <UpcomingDaysForecastItem {...day} key={day.weekday} />
    ))}
  </ul>
);

export default UpcomingDaysForecast;
