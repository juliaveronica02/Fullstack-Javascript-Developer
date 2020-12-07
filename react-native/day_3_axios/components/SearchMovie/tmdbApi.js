const API_TOKEN = "8ea21e1f0ed32fbc7256cfb9e61b9e4b"

export function getFilmFromApiByText(text){

    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN + "&query="+ text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function getImageFromApi(name){

    return 'https://image.tmdb.org/t/p/w300'+ name
}