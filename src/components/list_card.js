import { Component } from "./component";
export { listCard }

// function listCard(data) { 
//     const cache = data;
//     return function() {
//         return cache;
//     }
// }

const listCard = (obj) => {
    // const gallery = document.getElementById("gallery");
    console.log(obj)

    const image = document.getElementById("card-img");
    const title = document.getElementById("gallery-title");
    const overview = document.getElementById("gallery-overview");
    const listContainer = document.getElementsByClassName("list-container");

    const template = `    
        <span data-id="${obj.data.movie_results[0].id}" id="destroy">X</span>
        <h3 id="list-title" data-id="${obj.data.movie_results[0].id}">${obj.data.movie_results[0].title}</h3>
        <img id="list-img" src="${image.src}" alt="">
        <p id="score">Score: ${obj.data.movie_results[0].vote_average}</p>
        <p id="year">${obj.geoJSON.features[0].properties["Year"]}</p>
        <a href="${obj.geoJSON.features[0].properties["IMDB LINK"]}" target="_blank">IMDB Link</a>`
    return template;
}



    

