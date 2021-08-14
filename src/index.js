import { getData } from "./scripts/movie"
import { makeMap } from "./scripts/map";
import * as location from "./scripts/location";


import styles from "./index.scss"
// const { success, error, options} = location;
// const cord = navigator.geolocation.getCurrentPosition(success, error, options);


document.addEventListener("DOMContentLoaded", ()=> {
    // console.log("test")
    // const body = document.body;
    // body.addEventListener('click', h1Create)

    makeMap();

    // console.log(cord);

    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
    });


})



// const h1Create = () => {
//     const title = document.createElement("h1");
//     title.append("NYC Cinemap")
//     document.body.appendChild(title);
// }
