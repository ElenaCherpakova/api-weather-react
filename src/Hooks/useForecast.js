const useForecast = () => {
  const [isError, setIsErrot] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  return { isError, isLoading, forecast };
};

export default useForecast;
