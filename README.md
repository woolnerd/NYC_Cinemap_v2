
  # ***NYC Cinemap*** 
  ### a NYC Film Production Map App
Check it out: [Live site](http://nyc-cinemap.herokuapp.com/#/)

![App Overview](https://media.giphy.com/media/4mSvgNHWv79CXvGwin/giphy.gif)

## Background
As a veteran of the NYC film industry, my goal with this app is to shine a light on moments of cinematic history that may be right around the corner from you.

Thanks to the NYC Mayor's Office in providing their dataset "Scenes from the City", which offers latitude and longitude of about 200 films, the aim of this app is to draw from the user's current location (somewhere in NYC), and populate the site with several of the titles that were filmed just blocks away. The user can then see title, and trivia information regarding the film, and with some kind of data persistence, be able to save these films to a list with links to sites where they may be viewed. 

<img src="https://erabnb-seed-data.s3.amazonaws.com/nyc-cinemap-readme-photo/Screen+Shot+2021-10-18+at+9.42.29+AM.png" alt="front page" width="500"/>
<img src="https://erabnb-seed-data.s3.amazonaws.com/nyc-cinemap-readme-photo/Screen+Shot+2021-10-18+at+9.44.18+AM.png" alt="movei list" width="500"/>


## Functionality & MVPs

Users will be able to:

- Provide access to their current location or enter a location, so they can be found on the map. Map will be provided by an API, most likely Mapbox.

- Upon finding the users location, the map will zoom into a radius encompassing several blocks, and drop pins on the surrounding film locations. 

- Film data will be fetched from an IMDB-like API, and populate the interface with the movie details, images, links, etc.

##  Additionally

-  It would be great to be able to persist a list of the movies to be watched. I'm thinking the user can save any or all of the movies by ids in local storage and fetch it to repopulate the list when the user revisits the site. 

- Any stills from the location would be great to find and highlight as well. 


	![wireframe](./proposal/docs/nyc_cinemap_wireframe.png)
  
##  Technologies, Libraries, APIs

- Mapbox GL JS library to render the map that will feature a pin for the users location as well as surrounding film locations.

- TMDB API, for getting film details

- Navigator API, for getting user's location data

- Webpack to bundle

- "Scenes from the City" XML dataset: https://data.cityofnewyork.us/Business/Filming-Locations-Scenes-from-the-City-/qb3k-n8mm

- LocalStorage API for persisting a list of movies our user would like to see. 

- Font awesome for pin icons.

- Google fonts for, well, fonts.

- Possible backend for persisitng API tokens. 

##  Implementation Timeline

- ***Friday and weekend***:
    research the various APIs I'll be using, and understand how to implement them. Do we need a backend for API tokens? Get very familiar with Postman and be able to fetch all the data. Be able to grab location data from user. Clean and get NYC dataset ready for use.

- ***Monday***: Begin getting the map, and visuals on the page. Basic layout of elements. Move on to event handlers and JS functionality.

- ***Tuesday***: Map functionality should be close to finished. We want to be able to be zoomed in on our user's target, and get some sort of pin to represent the surrounding films. Film data populates. Work on styling, and getting layout cleaned up. 

- ***Wednesday***: Continue tweaking css. Work on localStorage to persist a list of movies to be watched. Deploy to server.

##  Bonus Features:

- media queries for mobile friendly viewing

- if another dataset for film locations is available, it's possible we could expand beyond NYC.

- stream the film! 

- random search for films outside of surrounding area

- links to film resources such as NYC Mayor's office, tours, soundstage info, and 411 Film production guide.

- film trivia

## Challenges:

### Coupling Data Sources 
* One of the trickiest parts of this project was coupling data from two sources. I had the data from the NYC Mayor's office, which had very unique information for each film location. But on top of that, I needed to utilize the OMDB API data because it was the freshest data and had more details about each film. But how to merge this information without having a backend DB? My solution was to create a class that would act like a data store. I named it appropriately "DataStore". Each instance of the DataStore class would have a method to accept the Mayor's office data, which was coming from the map markers where I embedded it. As well as a method to take in the incoming API data. The real magic happened with the createTemplate method, as this is the function that returned the gallery component, populated with the coupled data.

```js
function DataStore() {
    this.templates = [];
}

DataStore.prototype.addRes = function(data){
    this.data = data;
}

DataStore.prototype.addJSON = function(geoJSON) {
    this.geoJSON = geoJSON;
}


DataStore.prototype.createTemplate = function() {
    let scene = this.geoJSON.features[0].properties["Scene Type"];

    if (scene === 'N/A') {
        scene = "";
    } else {
        scene = `Scene type: ${scene}` 
    }

    const template = 
                `<div class="card">
                    <img id="card-img" src="https://image.tmdb.org/t/p/w500/${this.data.movie_results[0].poster_path}"
                        alt="" srcset="">
                </div>
                <div class="card-info">
                    <h2 id="gallery-title" data-id="${this.data.movie_results[0].id}">${this.data.movie_results[0].title}</h3>
                    <h3 id="year">${this.geoJSON.features[0].properties["Year"]}</h3>
                    <h4 id="director">${this.geoJSON.features[0].properties["Artist Credit"]} ${this.geoJSON.features[0].properties["Director/Filmmaker Name"]}</h4>
                    <h5 id="score">Score: ${this.data.movie_results[0].vote_average}</h5>
                    <br>
                    <p id="gallery-overview">${this.data.movie_results[0].overview.slice(0, 100) + "..."}</p>
                    <br>
                    <p id="location">${this.geoJSON.features[0].properties["Location Display Text"]}</p>
                    <p id="scene-type">${scene}</p>
                </div>`
    return template;
}

```
### Homebrewed geoJSON conversion
* While the scene data from the Mayor's Office was a boon for this project, as the location coordinates were precisely what was needed to get the job done; the format of excel spreadsheet was less then ideal. In order to get the pins on the map coupled with any of their data, I needed the data to be in a geoJSON format. This was my first time working with geoJSON, so I had to learn on the fly what the structure of such an object is like. I was hoping there would be some easy and cheap means of converting a XML to geoJSON online, but unfortunately, the options I could find all returned a mess of XML element tags, and what have you. The most useful conversion I found was to turn the XML into CSV. I then wrote an algorithm to convert the CSV into a geoJSON, and it actually worked like a charm. 
	
```js
function createGeoJSON1(myData) {
  const data = myData.slice(0);

  const GeoJSON = {
    "type": "FeatureCollection",
    "features": []
  };

  data.forEach(film => {
    GeoJSON.features.push(GeoJSONPoint(film["LONGITUDE"], film["LATITUDE"], film));
  })

  return GeoJSON
}

export const geoJSON = createGeoJSON1(scene_data)

```

### Fetch and populate from local storage 
* Without having a backend to work with, the only way to persist the movie list was to by saving the list to the local storage API. I saved an array containing the IMDB ids for the films of the list. This would require that on each refresh of the page, that the array of ids is iterated over, and a fetch call is made for each id. The list is then populated with the returned data. Desigining this functionality was a big challenge, but it was the most rewarding as I think it makes the project at truly useful app.  

```js
function fetchPopulateList(DataStore) {
    if (localStorage.getItem("listItems")) {
        let items = localStorage.getItem("listItems");
        const arr = JSON.parse(items);
        arr.forEach(id=>{
            // fetchCB(id)
            fetch(`/cors?imdbID=${encodeURIComponent(id)}`)
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json(); // parses JSON response into native JavaScript objects
              })
              .then((data) => {
                DataStore.addRes(data);
                return data;
              })
              .then((data) => {
                const list = document.querySelector(".list-container");
                const div = document.createElement("div");
                div.className = "list-card";

                let newTemplate = listCardFetch(data);
                div.innerHTML = newTemplate;

                list.appendChild(div);
              })
              .catch((error) => {
                console.error("Problem intercepted: ", error);
              });
                
        })

    }
}



```

