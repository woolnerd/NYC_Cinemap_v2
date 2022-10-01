import { modalAppear } from "./scripts/js_fun";
import {
  populateStorage,
  removeFromStorage,
  fetchPopulateList,
  newDataStore,
} from "./scripts/utils";
import { getListData, movieData } from "./scripts/movie";
import { makeMap } from "./scripts/map";
import { Component } from "./components/component";
import { gallery } from "./scripts/map";
import { getLocation, locationSearch } from "./scripts/location";
import { listCard } from "./components/list_card";
export { addToGallery };
import styles from "./index.scss";
import { DataStore } from "./components/gallery";

const dataStore = new DataStore();

const addToGallery = () => {
  document.getElementById("gallery").innerHTML = gallery.createTemplate();
};

const downtownCoords = [-73.995718, 40.721572];
const midtownCoords = [-73.983253, 40.750372];
const uptownCoords = [-73.941354, 40.830879];
const bronxCoords = [-73.8913, 40.847575];
const queensCoords = [-73.943823, 40.744583];
const brooklynCoords = [-73.965503, 40.677926];

const listContainer = document.getElementsByClassName("list-container");

document.addEventListener("DOMContentLoaded", () => {
  fetchPopulateList(dataStore);
  //renders map with current location
  navigator.geolocation.getCurrentPosition(success, error, options);

  //add movie from gallery to movie-list;
  const gal = document.getElementById("gallery");
  gal.addEventListener("click", () => addToMovieList(gallery));

  const clickBanner = document.querySelector(".gallery-banner");
  clickBanner.addEventListener("click", () => addToMovieList(gallery));

  //delete movie from list
  listContainer[0].addEventListener("click", deleteMovieFromList);

  const searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", locationSearch);

  const nav = document.getElementsByTagName("nav");

  //borough click events
  const downtown = document.querySelector("#downtown");
  downtown.addEventListener("click", () => makeMap(...downtownCoords));

  const midtown = document.querySelector("#midtown");
  midtown.addEventListener("click", () => makeMap(...midtownCoords));

  const uptown = document.querySelector("#uptown");
  uptown.addEventListener("click", () => makeMap(...uptownCoords));

  const bronx = document.querySelector("#bronx");
  bronx.addEventListener("click", () => makeMap(...bronxCoords));

  const queens = document.querySelector("#queens");
  queens.addEventListener("click", () => makeMap(...queensCoords));

  const brooklyn = document.querySelector("#brooklyn");
  brooklyn.addEventListener("click", () => makeMap(...brooklynCoords));
});

const deleteMovieFromList = (e) => {
  if (e.target.id === "destroy") {
    e.target.parentNode.remove();
  }
  removeFromStorage(e.target.dataset.id);
};

const addToMovieList = (galleryInstance) => {
  const galleryTitle = document.getElementById("gallery-title");
  const movieList = document.querySelector(".list-container");
  const mlNodeList = document.querySelectorAll(".list-card");
  const listDiv = document.createElement("div");

  listDiv.className = "list-card";
  listDiv.innerHTML = listCard(galleryInstance);
  const array = Array.from(mlNodeList);

  let inList = array.some((child) =>
    child.children[1].dataset.id.includes(galleryTitle.dataset.id)
  );

  if (!inList) {
    movieList.appendChild(listDiv);
    populateStorage(galleryTitle.dataset.id);
  }
};

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  //map is created here
  makeMap(pos.coords.longitude, pos.coords.latitude);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  makeMap(-74.0079, 40.7137);
}
