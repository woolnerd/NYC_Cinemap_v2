import { getData, movieData } from "./scripts/movie"
import { makeMap } from "./scripts/map";
import { Component } from "./components/component";
import { Gallery } from "./components/gallery";
// import { success, error, options} from "./scripts/location";
import { listCard } from "./components/list_card"
export { addToGallery }
import styles from "./index.scss"

const addToGallery = (data) => {
    document.getElementById('gallery').innerHTML = Gallery(data);
}




document.addEventListener("DOMContentLoaded", ()=> {


    // body.addEventListener('click', gallery.create)
    
    //renders map with current location
    navigator.geolocation.getCurrentPosition(success, error, options)
    const gallery = document.getElementById("gallery");
    gallery.addEventListener('click', addToMovieList)
    const movieList = document.querySelector(".list-container")
    movieList.classList.add("hide");
    const curLoc = document.getElementById("cur-loc");
    curLoc.innerHTML = "Curent Location: -74.0079, 40.7137"
})




const addToMovieList = () => {
    const movieList = document.querySelector(".list-container")
    // if ()
    
    const listDiv = document.createElement("div")
    listDiv.innerHTML = listCard();
    movieList.appendChild(listDiv)
    movieList.classList.remove("hide");
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    //map is created here
    makeMap(pos.coords.longitude, pos.coords.latitude);

}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    makeMap(-74.0079, 40.7137);
}



