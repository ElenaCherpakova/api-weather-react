const currentDayForecast = (data) => [
    {
        name: 'predictability',
        value: data.current.feels_like,
        unit: '°C',
    },
    {
        name: 'humidity',
        value: data.current.humidity,
        unit: '%',
    },
    {
        name: 'wind',
        value: Math.round(data.current.wind_speed),
        unit: 'km/h',
    },
    {
        name: 'air pressure',
        value: data.current.pressure,
        unit: 'mb',
    },
    {
        name: 'max temp',
        value: Math.round(data.daily[0].temp.max),
        unit: '°C',
    },
    {
        name: 'min temp',
        value: Math.round(data.daily[0].temp.min),
        unit: '°C',
    },
];

export default currentDayForecast;
