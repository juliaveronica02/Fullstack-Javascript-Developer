import { GET_MOVIE_ID, GET_MOVIE_TITLE, GET_MOVIE_IMAGE } from "../types";

const initialState = {
    movieId: "",
    movieTitle:"",
    movieImage: ""
  };
  
  const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIE_ID:
        return {...state, movieId: action.payload};
      case GET_MOVIE_TITLE:
        console.log("title reducer",action.payload);
        return {...state, movieTitle: action.payload};
      case GET_MOVIE_IMAGE:
            return {...state, movieImage: action.payload}
      default:
        return state;
    }
  };
  
  export default MovieReducer;