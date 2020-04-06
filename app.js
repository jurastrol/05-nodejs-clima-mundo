const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: 'true',
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');





const getInfo = async(direccion) => {

    try {

        let coordenadas = await lugar.getLugarLatLng(direccion);

        let temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima de ${coordenadas.direccion} es de ${temperatura}`;

    } catch (error) {

        return `No se pudo depterminar el clima de ${direccion}`

    }




}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);