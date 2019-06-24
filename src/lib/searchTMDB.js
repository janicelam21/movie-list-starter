import TMDB_API_KEY from '../config/TMDBapi.js';
import $ from "jquery";

var SearchDatabase = (options, callback) => {
  $.ajax({
    url: 'https://api.themoviedb.org/3/search/movie?api_key='+ TMDB_API_KEY + '&query=' + options.query,
    type: 'GET',
    success: callback,
    //error: (error) => {console.log(error)}

  });
};

export default SearchDatabase; 