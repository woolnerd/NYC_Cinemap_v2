export { modalAppear }
import { getLocation, locationSearch} from './location';

function modalAppear(){
    const modal =  document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    // const form =  document.querySelector('#mod-search-form');
    
    // const input =  document.querySelector('#mod-loc-input');

    modal.classList.remove('hidden');
    modalContent.classList.remove('hidden');
    // form.classList.remove('hidden');
    // button.classList.remove('hidden');
    // input.classList.remove('hidden')
  
}


function modalSearch(e){
    e.preventDefault();
    console.log("good")
}