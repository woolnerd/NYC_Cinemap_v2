import { Gallery } from "../components/gallery";
import { test } from "../index";
import { imdbID } from "./map";


export async function getData(imdbID) {
    const apiKey = "41ed915479faa3412cbe1fa651107a4d";

    const getByIMDBid = (imdbID, apiKey) => {
        return `https://api.themoviedb.org/3/find/${imdbID}?api_key=${apiKey}&language=en-US&external_source=imdb_id`;
    }

    const url = getByIMDBid(imdbID, apiKey);

    const response = await fetch(url);
    return response;
}

export async function getListData(imdbID) {
    const apiKey = "41ed915479faa3412cbe1fa651107a4d";

    const getByIMDBid = (imdbID, apiKey) => {
        return `https://api.themoviedb.org/3/movie/${imdbID}?api_key=${apiKey}&language=en-US&external_source=imdb_id`;
    }

    const url = getByIMDBid(imdbID, apiKey);

    const response = await fetch(url);
    return response;
}





