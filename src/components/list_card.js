import { Component } from "./component";
export { listCard, listCardFetch}

// function listCard(data) { 
//     const cache = data;
//     return function() {
//         return cache;
//     }
// }

const listCard = (obj) => {
    // const gallery = document.getElementById("gallery");
    // console.log(obj.data.id)

    const image = document.getElementById("card-img");
    const title = document.getElementById("gallery-title");
    const overview = document.getElementById("gallery-overview");
    const listContainer = document.getElementsByClassName("list-container");
    const template =`
        <span data-id="${obj.data.movie_results[0].id}" id="destroy">X</span>
        <h3 id="list-title" data-id="${obj.data.movie_results[0].id}">${obj.data.movie_results[0].title}</h3>
        <img id="list-img" src="${image.src}" alt="">
        <p id="score">Score: ${obj.data.movie_results[0].vote_average}</p>

        <p id="year">${obj.geoJSON.features[0].properties["Year"]}</p>
        <a id="imdb-link" href="${obj.geoJSON.features[0].properties["IMDB LINK"]}" target="_blank">IMDB Link</a>`
    return template;
}

const listCardFetch = (template) => {
    const newTemplate = `
                            <span data-id="${template.id}" id="destroy">X</span>
                            <h3 id="list-title" data-id="${template.id}">${template.title}</h3>
                            <img id="list-img" src="https://image.tmdb.org/t/p/w500/${template.poster_path}" alt="">
                            <p id="score">Score: ${template.vote_average}</p>

                            <p id="year">${template.release_date.slice(0, 4)}</p>
                            <a id="imdb-link" href="http://www.imdb.com/title/${template.imdb_id}" target="_blank">IMDB Link</a>`
        return newTemplate
                }




        // < span data-id="${obj.id}" id = "destroy" > X</span >
        // <h3 id="list-title" data-id="${obj.id}">${obj.title}</h3>
        // <img id="list-img" src="${image.src}" alt="">
        // <p id="score">Score: ${obj.vote_average}</p>`
