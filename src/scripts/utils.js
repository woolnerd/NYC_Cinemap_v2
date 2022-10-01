export { populateStorage, removeFromStorage, fetchPopulateList, newDataStore };
import { DataStore } from "../components/gallery";
import { listCard, listCardFetch } from "../components/list_card"

const newDataStore = new DataStore();



function populateStorage(listItem) {
    if (!localStorage.getItem("listItems")) {
        const item = JSON.stringify([listItem]);
        localStorage.setItem("listItems", item);
    } else {
        let items = localStorage.getItem("listItems");
        const arr = JSON.parse(items);
        arr.push(listItem);
        localStorage.setItem("listItems", JSON.stringify(arr));
    }
}

function removeFromStorage(id) {
    let arr = localStorage.getItem("listItems");
     arr = JSON.parse(arr);
     let dup = arr.slice();
    
     arr.forEach((el, i)=> {
         if (el === id) delete dup[i] 
     }) 
     dup = dup.filter(el=> el!==null);
     localStorage.setItem("listItems", JSON.stringify(dup));
}



//fetch movie data
function fetchPopulateList(DataStore) {
    if (localStorage.getItem("listItems")) {
        let items = localStorage.getItem("listItems");
        const arr = JSON.parse(items);
        arr.forEach(id=>{
            // fetchCB(id)
            fetch(`/cors?imdbID=${encodeURIComponent(id)}`)
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json(); // parses JSON response into native JavaScript objects
              })
              .then((data) => {
                DataStore.addRes(data);
                return data;
              })
              .then((data) => {
                const list = document.querySelector(".list-container");
                const div = document.createElement("div");
                div.className = "list-card";

                let newTemplate = listCardFetch(data);
                div.innerHTML = newTemplate;

                list.appendChild(div);
              })
              .catch((error) => {
                console.error("Problem intercepted: ", error);
              });
                
        })

    }
}







