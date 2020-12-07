import { GET_MOVIE_TITLE, GET_MOVIE_ID, GET_MOVIE_IMAGE } from "../types";

export const getMovieId = (id) => {
    return {
        type: GET_MOVIE_ID,
        payload: id
    }
}
export const getMovieTitle = (title) =>{
    console.log("title Action", title);
    return {
        type: GET_MOVIE_TITLE,
        payload: title
    }
}
export const getMovieImage = (image) => {
    console.log("movieImage", image);
    return{
        type: GET_MOVIE_IMAGE,
        payload: image
    }
}