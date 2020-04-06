const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=23a88fd634aaaeac8a7a4d42a6984947s&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
};