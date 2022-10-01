import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = process.env.MAP_BOX_API_KEY;

import { geoJSON } from "../assets/scene_data";
import { addToGallery } from "../index";
import { DataStore } from "../components/gallery";

export const imdbID = "tt0075686";

export const gallery = new DataStore();

export const makeMap = (long = -73.98015, lat = 40.782838) => {
  //create new map object, container grabs from div with id of map
  const generateMarkers = (lon, lat, str1) => {
    const marker = new mapboxgl.Marker({ color: "#d80000" })
      .setLngLat([lon, lat])
      .setPopup(
        new mapboxgl.Popup().setHTML(`<h3 class="marker-info">${str1}</h1>`)
      )
      // add popup
      .addTo(map);
  };

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [long, lat],
    zoom: 14,
  });

  const coordinates = geoJSON.features[0].geometry.coordinates.slice();

  map.on("load", () => {
    // Add an image to use as a custom marker
    generateMarkers(long, lat, "You are here!");

    geoJSON.features.forEach(function (marker) {
      // create a HTML element for each feature
      const el = document.createElement("div");

      //here we add the properties from our geoJSON dataset to the coordinates/markers
      let film = marker.properties["Film"];
      let imdb = marker.properties["IMDB LINK"];
      let year = marker.properties["Year"];
      let location = marker.properties["Location Display Text"];
      let sceneType = marker.properties["Scene Type"];
      let creator = marker.properties["Artist Credit"];
      let director = marker.properties["Director/Filmmaker Name"];

      el.dataset.year = year;
      el.dataset.location = location;
      el.dataset.sceneType = sceneType;
      el.dataset.creator = creator;
      el.dataset.director = director;
      el.dataset.imdb = imdb.split("/")[4];
      el.dataset.imdbFull = imdb;
      el.dataset.film = film;
      el.className = "marker";

      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3 class="pop-up-title">' + film + "</h3>")
        )
        .addTo(map);
    });

    const markers = document.querySelectorAll(".marker");
    markers.forEach((marker) => {
      marker.addEventListener("mouseenter", (e) => {
        //instead of refactoring addToGallery interpolation...
        const fakeJSON = {
          features: [
            {
              properties: {
                Year: e.target.dataset.year,
                "Location Display Text": e.target.dataset.location,
                "Scene Type": e.target.dataset.sceneType,
                "Artist Credit": e.target.dataset.creator,
                "Director/Filmmaker Name": e.target.dataset.director,
                "IMDB LINK": e.target.dataset.imdbFull,
                Film: e.target.dataset.film,
              },
            },
          ],
        };
        gallery.addJSON(fakeJSON);

        fetch(`/api?imdbID=${encodeURIComponent(e.target.dataset.imdb)}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error with network response");
            }
            return response.json();
          })
          .then((data) => {
            gallery.addRes(data);
            addToGallery();
          })
          .catch((error) => {
            console.error("Problem intercepted: ", error);
          });
      });
    });

    // add navigation controls
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );
  });

  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  //MAP load event
  map.on("mouseenter", "points", (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = "pointer";

    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const title = e.features[0].properties["Film"];
    const imdb = e.features[0].properties["IMDB LINK"];

    //add the data from the geoJSON Mayor's office data here
    gallery.addJSON(e);

    imdbID = imdb.split("/")[4];

    fetch(`/api?imdbID=${encodeURIComponent(imdbID)}`)
      // apiRequest(imdbID)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error with network response");
        }
        return response.json();
      })
      .then((data) => {
        gallery.addRes(data);
        addToGallery();
      })
      .catch((error) => {
        console.error("Problem intercepted: ", error);
      });

    popup.setLngLat(coordinates).setHTML(title).addTo(map);
  });

  map.on("mouseleave", "points", (e) => {
    map.getCanvas().style.cursor = "";
    popup.remove();
  });
};

window.geoJSON = geoJSON;
