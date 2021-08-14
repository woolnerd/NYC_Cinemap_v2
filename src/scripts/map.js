// import * as location from "./location";
import mapboxgl from 'mapbox-gl'
import { scene_data } from "/Users/davidwoolner/Desktop/AppAcademy/NYC_Cinemap/src/assets/scene_data.js";

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWR3b29sbmVyIiwiYSI6ImNrczliam40MzB0YTIydm9ja2x3NDN5cnQifQ.WodjI99jg0lWF31OhaXCFA';


export const makeMap = () => {
    //create new map object, container grabs from div with id of map
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.0079, 40.7137],
            zoom: 15

        });
        //add navigation controls
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        }));

        //add marker to map
    // const marker = new mapboxgl.Marker()
    //     .setLngLat([-74.0079, 40.7137])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>")) // add popup
    //     .addTo(map);
    // const { success, error, options} = location;



    const {userLong, userLat} = navigator.geolocation.getCurrentPosition((position) => {
         return [position.coords.latitude, position.coords.longitude];
    });

    const generateMarkers = (lon, lat, title) => {
          const marker = new mapboxgl.Marker()
        .setLngLat([lon, lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<h1 class="marker">${title}</h1>`)) // add popup
        .addTo(map);

    }

    //iterate over every film but for first object which is column info
    scene_data.slice(1).forEach(film => {
        generateMarkers(film.LONGITUDE, film.LATITUDE, film.Film);
    })
}
