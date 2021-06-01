const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=90f342266a58b94482c10ac07e97a3c7&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}