const request = require('request');

const geocode = (address, callback) => {
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibmVtZXNpczE5ODl4IiwiYSI6ImNrZjczMXd3MDEyZzMycm55ODVtamxhcDEifQ.4LOBibfdLvGQiU5tRzDNDg';

    request({url: geoUrl, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services', undefined);
        } else if(body.features.length === 0) {
            callback('Unable to find location. Try another!', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;