import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://stormy-sands-05530.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);


  //Refactoring: 

  const getWoeid = async (location) => {
    //1. get woeid (where on earth id)
    const { data } = await axios(`${REQUEST_URL}/search`, {
      params: { query: location },
    });
    //2. get weather

    if (!data || data.length === 0) {
      setError("There is no such location");
      return;
    }
    return data;
  }

  const getForecastData = async (woeid) => {
    const { data } = await axios(`${REQUEST_URL}/${woeid}`)
    if (!data || data.length === 0) {
      setError("Something went wrong");
      return;
    }
    return data
  }

  const submitRequest = async (location) => {
    const response = await getWoeid(location)
    const data = await getForecastData(response[0].woeid)
    console.log({data})
  };
  return { isError, isLoading, forecast, submitRequest };
};

export default useForecast;
