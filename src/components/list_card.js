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
    <div class="list-movie">
        <h3 id="list-title" data-id="${title.dataset}">${title.innerText}</h3>
        <img id="list-img" src="${image.src}" alt="">
        <p id="list-overview">${overview.innerText.slice(0,40)+"..."}</p>
    </div>`
    return template;
}



    

