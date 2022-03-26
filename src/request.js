const API_KEY = "d6e54198ff7fcb181d716dd074a1e859";

export const requests ={
  feachTrending:`/trending?all?week?api_Key=${API_KEY}&language=en-us`,
  feachNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feactTopRated:`/discover/tv?api_key=${API_KEY}&languager=en-us`,
  feactActionMovies:`/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies:`/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
}