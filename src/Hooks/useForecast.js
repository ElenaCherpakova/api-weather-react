import { useState } from "react";

const useForecast = () => {
  const [isError, setIsErrot] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);


  const submitRequest = (location)=> {
    console.log({location})
  }
  return { isError, isLoading, forecast,  submitRequest };
};

export default useForecast;
