export { success, error, options}

// if ('geolocation' in navigator) {
//     /* geolocation is available */
// } else {
//     /* geolocation IS NOT available */
// }

///CLEAN UP THIS IS FROM DOCS
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    const crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    // return crd;
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

