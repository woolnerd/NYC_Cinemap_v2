export { populateStorage, removeFromStorage, fetchPopulateList, newDataStore };
import { GalleryTEST } from "../components/gallery";
import { listCard } from "../components/list_card"

const newDataStore = new GalleryTEST();



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
function fetchPopulateList(fetchCB, dataStore) {
    if (localStorage.getItem("listItems")) {
        let items = localStorage.getItem("listItems");
        const arr = JSON.parse(items);
        arr.forEach(id=>{
            fetchCB(id)  
            .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json(); // parses JSON response into native JavaScript objects
                })
                .then((data) => {
                    // console.log(data);
                    dataStore.addRes(data);
                    dataStore.templates.push(data);
                    // const card = listCard(dataStore)
                    // newDataStore.templates.push(data);
                })
                .catch((error) => {
                    console.error(
                        "Problem intercepted: ",
                        error
                    );
                });
        })
    }
}







