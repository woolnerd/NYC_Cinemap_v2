import { populateStorage, removeFromStorage } from "./scripts/utils";
import { getData, movieData } from "./scripts/movie"
import { makeMap } from "./scripts/map";
import { Component } from "./components/component";
// import { Gallery } from "./components/gallery";
import { gallery } from "./scripts/map";
import { getLocation, locationSearch } from "./scripts/location";
import { listCard } from "./components/list_card"
// import * as boroughs from "./scripts/boroughs";
export { addToGallery }
import styles from "./index.scss"

// const addToGallery = (data) => {

const addToGallery = () => {
    // document.getElementById('gallery').innerHTML = Gallery(data);
    document.getElementById('gallery').innerHTML = gallery.createTemplate();
    // console.log(gallery.createTemplate());
    // console.log(gallery);
}

 const downtownCoords = [-73.995718, 40.721572];
 const midtownCoords = [-73.983253, 40.750372]
 const uptownCoords = [-73.941354, 40.830879]
 const bronxCoords = [-73.891300, 40.847575]
 const queensCoords = [-73.943823, 40.744583]
 const brooklynCoords = [-73.965503, 40.677926]


document.addEventListener("DOMContentLoaded", ()=> {
    //renders map with current location
    navigator.geolocation.getCurrentPosition(success, error, options)

    const listContainer = document.getElementsByClassName("list-container");
    // let div = localStorage.getItem("listItem")
    // console.log(div[0]);
    // listContainer.appendChild(div);



    //add movie from gallery to movie-list;
    const gal = document.getElementById("gallery");
    gal.addEventListener('click', ()=>addToMovieList(gallery))

  
    //delete movie from list
    // const listContainer = document.getElementsByClassName("list-container");
    listContainer[0].addEventListener('click', deleteMovieFromList);



    const searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", locationSearch);

   const nav = document.getElementsByTagName("nav");

    //borough click events
    const downtown = document.querySelector("#downtown")
    downtown.addEventListener('click', () => makeMap(...downtownCoords));

    const midtown = document.querySelector("#midtown")
    midtown.addEventListener('click', () => makeMap(...midtownCoords));

    const uptown = document.querySelector("#uptown")
    uptown.addEventListener('click', () => makeMap(...uptownCoords));

    const bronx = document.querySelector("#bronx")
    bronx.addEventListener('click', () => makeMap(...bronxCoords));

    const queens = document.querySelector("#queens")
    queens.addEventListener('click', () => makeMap(...queensCoords));

    const brooklyn = document.querySelector("#brooklyn")
    brooklyn.addEventListener('click', () => makeMap(...brooklynCoords));



})


const deleteMovieFromList = (e) => {
    const listContainer = document.getElementsByClassName("list-container");
    // listContainer.removeChild(e.target);

    if (e.target.id === "destroy") {
        e.target.parentNode.remove();
    }
    console.log(e);
    // console.log(id);
    console.log(e.target.dataset.id)
    removeFromStorage(e.target.dataset.id)
    // console.log(e);
}


const addToMovieList = (galleryInstance) => {
    const galleryTitle = document.getElementById("gallery-title");
    const movieList = document.querySelector(".list-container"); 
    const mlNodeList = document.querySelectorAll(".list-card");
    const listDiv = document.createElement("div")

    listDiv.className = "list-card"
    listDiv.innerHTML = listCard(galleryInstance);
    const array = Array.from(mlNodeList);

    let inList = array.some(child => child.children[1].dataset.id.includes(galleryTitle.dataset.id));

    if (inList) {
        console.log("in list")
    } else {
        console.log("not in list");
        movieList.appendChild(listDiv)
        populateStorage(galleryTitle.dataset.id);
    }

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



