const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const weatherUrl = 'http://api.weatherstack.com/current?access_key=622e636f873f38d33d4bfac5ebf24126&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude);

    request({url: weatherUrl, json: true}, (error, { body }) => {
        if (error) {
            callback('Low Level Error happend!', undefined);
        } else if (body.error) {
            callback('Coordinate Error happened!', undefined);
        } else {
            callback(undefined, 'Description: ' + body.current.weather_descriptions.toString() + ', the temperature is: ' + body.current.temperature + '°. It feels like ' + body.current.feelslike + '°');
        }
    });
};

module.exports = forecast;