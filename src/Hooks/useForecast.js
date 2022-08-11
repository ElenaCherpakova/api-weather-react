import { useState } from "react";
import axios from "axios";

import getCurrentDayForecast from "../helpers/getCurrentDayForecast";
import getCurrentDayDetailedForecast from "../helpers/getCurrentDayDetailedForecast";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";

const GEO_URL = `http://api.openweathermap.org/geo/1.0/direct?q=`;
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/onecall?`;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getGeoData = async (location) => {
    const { data } = await axios(`${GEO_URL}${location}&appid=${process.env.REACT_APP_WEATHER_API}`);
 
    if (!data || data.length === 0) {
      setError("There is no such location");
      setLoading(false);
      return;
    }
    return data;
  };

  const getForecastData = async (coordinate) => {
    const { data } = await axios(`${WEATHER_URL}lat=${coordinate[0].lat}&lon=${coordinate[0].lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`);

    if (!data || data.length === 0) {
      setError("Something went wrong");
      setLoading(false);
      return;
    }
    console.log({ data })
    return data;
  };

  const gatherForecastData = (data, location) => {
    const currentDay = getCurrentDayForecast(data, location);
    const currentDayDetails = getCurrentDayDetailedForecast(data);
    const upcomingDays = getUpcomingDaysForecast(data.daily);

    setForecast({
      currentDay,
      currentDayDetails,
      upcomingDays
    });
    setLoading(false);
  };

  const submitRequest = async (location) => {
    setLoading(true);
    setError(false);

    const response = await getGeoData(location);
    if (!response) return;

    const data = await getForecastData(response);
    if (!data) return;

    gatherForecastData(data,location);
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;