const apiKey = "41ed915479faa3412cbe1fa651107a4d";
// annie hall imdb 
const testID = "tt0075686";

const getByIMDBid = (imdbID, apiKey) => {
    return `https://api.themoviedb.org/3/find/${imdbID}?api_key=${apiKey}&language=en-US&external_source=imdb_id`;
}

const getFilm = getByIMDBid(testID, apiKey);

export async function getData(url) {
    const response = await fetch(url);
    // debugger;
    //   console.log(response); == .then(res => log(res))
    return response;
}

getData(getFilm)
    .then((response) => {
        // Our async function returns a promise object on which we can chain the .then() method
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); // parses JSON response into native JavaScript objects
    })
    .then((data) => {

        console.log(data);
    })
    .catch((error) => {
        // If our fetch was unnsuccessful, here we can handle our error(s)
        console.error(
            "There has been a problem with your fetch operation: ",
            error
        );
    });


