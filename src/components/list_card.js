import { Component } from "./component";
export { listCard }

// function listCard(data) { 
//     const cache = data;
//     return function() {
//         return cache;
//     }
// }

const listCard = () => {
    // const gallery = document.getElementById("gallery");
    const image = document.getElementById("card-img");
    const title = document.getElementById("gallery-title");
    const overview = document.getElementById("gallery-overview");

    const template = `    
    <div class="list-movie">
        <h3 id="list-title" data-id="${title.dataset}">${title.innerText}</h3>
        <img id="list-img" src="${image.src}" alt="">
        <p id="list-overview">${overview.innerText.slice(0,20)+"..."}</p>

    </div>
`
    return template;
}



    

