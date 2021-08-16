// import * as location from "./location";
import mapboxgl from 'mapbox-gl'
export { makeMap };
mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWR3b29sbmVyIiwiYSI6ImNrczliam40MzB0YTIydm9ja2x3NDN5cnQifQ.WodjI99jg0lWF31OhaXCFA';
import { Component } from "../components/component"
import { geoJSON } from '/Users/davidwoolner/Desktop/AppAcademy/NYC_Cinemap/src/assets/scene_data.js';
import { getData } from '/Users/davidwoolner/Desktop/AppAcademy/NYC_Cinemap/src/scripts/movie'
import { addToGallery } from "../index";
import { listCard } from '../components/list_card';

export let imdbID = "tt0075686";



const makeMap = (long= -74.0079, lat= 40.7137) => {
    //create new map object, container grabs from div with id of map
    const generateMarkers = (lon, lat, str1, str2) => {
        const marker = new mapboxgl.Marker({ color: "#000" })
            .setLngLat([lon, lat])
            .setPopup(new mapboxgl.Popup().setHTML(`<h3 class="marker">${str1}</h1>
              <h2 class="imdbID"><a href="${str2}">${str2}</a></h2>`)) // add popup
            .addTo(map);

    }
    
   
    
    const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            // center: [long, lat],
        center: [long,
            lat],
            zoom: 15

        });


        // add navigation controls
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        }));

        map.on('load', () => {
            // Add an image to use as a custom marker
            map.loadImage(
                'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
                (error, image) => {
                    if (error) throw error;
                    map.addImage('custom-marker', image);
                    // Add a GeoJSON source with 2 points
                    map.addSource('points', {
                        'type': 'geojson',
                        'data': geoJSON
                    });

                    // Add a symbol layer
                    map.addLayer({
                        'id': 'points',
                        'type': 'symbol',
                        'source': 'points',
                        'layout': {
                            'icon-image': 'custom-marker',
                            // get the title name from the source's "title" property
                            'text-field': ['get', "Film"],
                            'text-font': [
                                'Open Sans Semibold',
                                'Arial Unicode MS Bold'
                            ],
                            'text-offset': [0, 1.25],
                            'text-anchor': 'top'
                        }
                    });
                }
            );
        });

            
           
            
    const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'points', (e) => {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const imdb = e.features[0].properties["IMDB LINK"];
        imdbID = imdb.split("/")[4]

        getData(imdbID)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); // parses JSON response into native JavaScript objects
            })
            .then((data) => {
                console.log(data)
                addToGallery(data);
            })
            .catch((error) => {
                console.error(
                    "Problem intercepted: ",
                    error
                );
            });

        // const title = e.features[0].properties["Film"];
        // const year = e.features[0].properties["Year"];
        // const gallery = document.querySelector("#gallery");
        // const div = document.createElement("div");
        // div.innerHTML =`<h1>${title}</h1><h2>${year}</h2>` ;
        // div.id = "gallery-current"
        // gallery.appendChild(div);

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        //     coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        // }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(imdb).addTo(map);
        // const gallery = new Component("h1", "this thing works!", document.body)
        //  gallery.create();
        
    });

    map.on('mouseleave', 'points', (e) => {
        map.getCanvas().style.cursor = '';
        // const div = document.querySelector("#gallery-current");
        // div.remove();
        popup.remove();
    });

        // scene_data.slice(1).forEach(film => {
        //     if (film["IMDB LINK"] !== null) { 
        //         let imdbID = film["IMDB LINK"];
        //         imdbID = imdbID.split("/")[4]
        //         generateMarkers(film.LONGITUDE, film.LATITUDE, film.Film, imdbID);
        //     };
        // })

        generateMarkers(long, lat, "You are here!")


};



    // const popup = new mapboxgl.Popup({
    //     closeButton: false,
    //     closeOnClick: false
    // });


    //     //add marker to map
    // const marker = new mapboxgl.Marker()
    //     .setLngLat([-74.0079, 40.7137])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>")) // add popup
    //     .addTo(map);
    // const { success, error, options} = location;

    


    // //iterate over every film but for first object which is column info

    // //current user marker
    


// }
