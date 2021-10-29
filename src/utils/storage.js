import AsyncStorage from "@react-native-async-storage/async-storage"

export async function getMoviesSave(key) {
    const myMovies = await AsyncStorage.getItem(key)
    let moviesSave = JSON.parse(myMovies) || [];

    return moviesSave;
}

export async function addMovie(key, newMovie) {
    const moviesStored = await getMoviesSave(key);

    const hasMovie = moviesStored.some(item => item.id === newMovie.id);

    if (hasMovie) return

    moviesStored.push(newMovie);
    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
}

export async function removeMovie(key, id) {
    const myMovies = await getMoviesSave(key)

    let currentSavedMovies = myMovies.filter(item => item.id !== id)

    await AsyncStorage.setItem(key, JSON.stringify(currentSavedMovies));
}

export async function isSaved(key, movie) {
    const moviesStored = await getMoviesSave(key);
    const hasMovie = moviesStored.some(item => item.id === movie.id);

    return hasMovie;
}