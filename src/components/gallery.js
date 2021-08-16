export { Gallery }
import { Component } from "./component"; 
// import { movieData }


// class Gallery extends Component {
//     constructor() {

//     }


// }

const Gallery = (data) => {
    const template = `
        <div class="card">
            <img id="card-img" src="https://image.tmdb.org/t/p/w500/${data.movie_results[0].poster_path}" alt="${data.movie_results[0].title}" srcset="">
        </div>
        <div class="card">
            <h3 id="gallery-title" data-id="${data.movie_results[0].id}">${data.movie_results[0].title}</h3>
            <p id="gallery-overview">${data.movie_results[0].overview.slice(0,100)+"..."}</p>
        </div>`
    return template
}

