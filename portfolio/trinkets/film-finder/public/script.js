const tmdbKey = '<your-api-key>';
const tmdbBaseUrl = 'https://api.themoviedb.org/3/';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
    const endpoint = `${tmdbBaseUrl}genre/movie/list`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: 'Bearer ' + tmdbKey
        }
    };
    try{
        const response = await fetch(endpoint,options);
        if(response.ok){
            const jsonResponse =  await response.json();
            return jsonResponse.genres;
        }
        throw new Error(response.statusText);
    }
    catch(err){
        console.log(err);
    }
};

const getMovies = async () => {
    const selectedGenre = getSelectedGenre();
    const endpoint = `${tmdbBaseUrl}discover/movie?with_genres=${selectedGenre}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: 'Bearer ' + tmdbKey
        }
    }
    try{
        const response = await fetch(endpoint,options);
        if(response.ok){
            const jsonResponse =  await response.json();
            return jsonResponse['results'];
        }
        throw new Error(response.statusText);
    }
    catch(err){
        console.log(err);
    }


};

const getMovieInfo = async (movie) => {
    const movieId = movie.id;
    const endpoint = `${tmdbBaseUrl}movie/${movieId}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: 'Bearer ' + tmdbKey
        }
    }
    try{
        const response = await fetch(endpoint,options);
        if(response.ok){
            const jsonResponse =  await response.json();
            return jsonResponse;
        }
        throw new Error(response.statusText);
    }
    catch (error){
        console.log(error);
    }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
    const movieInfo = document.getElementById('movieInfo');
    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    };
    const movies = await getMovies();
    const randomMovie = getRandomMovie(movies);
    const info = await getMovieInfo(randomMovie);
    displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;