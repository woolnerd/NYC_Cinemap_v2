export { GalleryTEST }



// const Gallery = (data) => {
//     const template = `
//         <div class="card">
//             <img id="card-img" src="https://image.tmdb.org/t/p/w500/${data.movie_results[0].poster_path}" alt="${data.movie_results[0].title}" srcset="">
//         </div>
//         <div class="card">
//             <h3 id="gallery-title" data-id="${data.movie_results[0].id}">${data.movie_results[0].title}</h3>
//             <p id="gallery-overview">${data.movie_results[0].overview.slice(0,100)+"..."}</p>
//         </div>`
//     return template
// }


// Gallery = (data) => {
//     const template = `
//         <div class="card">
//             <img id="card-img" src="https://image.tmdb.org/t/p/w500/${data.movie_results[0].poster_path}" alt="${data.movie_results[0].title}" srcset="">
//         </div>
//         <div class="card">
//             <h3 id="gallery-title" data-id="${data.movie_results[0].id}">${data.movie_results[0].title}</h3>
//             <p id="gallery-overview">${data.movie_results[0].overview.slice(0, 100) + "..."}</p>
//         </div>`
//     return template
// }
window.GalleryTEST = GalleryTEST;

function GalleryTEST() {

}

GalleryTEST.prototype.addRes = function(data){
    this.data = data;
}

GalleryTEST.prototype.addJSON = function(geoJSON) {
    this.geoJSON = geoJSON;
}

GalleryTEST.prototype.createTemplate = function() {
    console.log(this.data);
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
                    <p id="gallery-overview">${this.data.movie_results[0].overview.slice(0, 100) + "..."}</p>
                    <p id="location">${this.geoJSON.features[0].properties["Location Display Text"]}</p>
                    <p id="scene-type">${this.geoJSON.features[0].properties["Scene Type"]}</p>
                </div>`
    return template;
}



// const g = new GalleryTEST();

// console.log(g);




        // < div class="card" >
        //     <h3>TEST</h1>
        //     <img id="card-img" src="https://image.tmdb.org/t/p/w500/${this.data.movie_results[0].poster_path}" alt="${this.data.movie_results[0].title}" srcset="">
        // </div>
        // <div class="card">
        //     <h3 id="director">${this.geoJSON.features[0].properties["Director/Filmmaker Name"]}</h1>
        //     <h3 id="gallery-title" data-id="${this.data.movie_results[0].id}">${this.data.movie_results[0].title}</h3>
        //     <p id="gallery-overview">${this.data.movie_results[0].overview.slice(0, 100) + "..."}</p>
        // </div>`