import moment from 'moment';

const getUpcomingDaysForecast = data =>
    data.slice(1, 6).map((day, index) => ({
        imgUrl: `${day.weather[0].icon}.png`,
        temperature: Math.round(day.temp.max),
        feels_like: Math.round(day.feels_like.day),
        weekday: moment(new Date())
            .add(index + 1, 'days')
            .format('dddd'),
    }));

export default getUpcomingDaysForecast;
