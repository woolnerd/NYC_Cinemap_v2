import { makeMap } from './map';

export async function getLocation(address) {
  const apiKey = process.env.MAP_BOX_API_KEY;

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${apiKey}`;
  const response = await fetch(url);
  return response;
}

//search for location from input
export function locationSearch(e) {
  e.preventDefault();
  const locInput = document.querySelector('#loc-input');
  const address = locInput.value;

  const curLoc = document.querySelector('#cur-loc');
  curLoc.innerHTML = `Search Location:  ${address}`;

  locInput.value = '';

  getLocation(address)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const coords = data.features[0].geometry.coordinates;
      makeMap(coords[0], coords[1]);
      const curLoc = document.querySelector('#cur-loc');
      curLoc.innerHTML = `Search Location: ${address}`;
    })
    .catch((error) => {
      console.error('Problem intercepted: ', error);
    });
}
