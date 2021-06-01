const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);



    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20${ encodedUlr }.json?access_token=pk.eyJ1Ijoibmljb2xhc2dpdCIsImEiOiJja2w1YWY3cmwxMHI5Mm9wN3AwMXFzNHlyIn0.EXPWkwm95PyeO3N2gKpLsA`,
        headers: { 'access_token': 'pk.eyJ1Ijoibmljb2xhc2dpdCIsImEiOiJja2w1YWY3cmwxMHI5Mm9wN3AwMXFzNHlyIn0.EXPWkwm95PyeO3N2gKpLsA' }
    });

    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.features[0];
    const direccion = data.place_name;
    const lng = data.geometry.coordinates[0];
    const lat = data.geometry.coordinates[1];

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}