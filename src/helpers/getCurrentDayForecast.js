import moment from 'moment';

const getCurrentDayForecast = (data, title) => ({
    weekday: moment(new Date()).format('dddd'),
    date: moment(new Date()).format('MMMM Do'),
    location: title,
    temperature: Math.round(data.current.temp),
    weatherIcon: `${data.current.weather[0].icon}.png`,
    weatherDescription: data.current.weather[0].description,
});

export default getCurrentDayForecast;