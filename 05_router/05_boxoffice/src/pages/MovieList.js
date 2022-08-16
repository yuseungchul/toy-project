import { useState, useEffect } from 'react';
import { getMovieList } from '../api/MovieAPI';
import MovieItem from '../components/MovieItem';

function MovieList() {

    const [movieList, setMovieList] = useState([]);

    useEffect(
        () => {
            getMovieList()
                .then(data => setMovieList(data));
        },
        []
    );

    return(
        
        <div className="content-row">  
            { movieList.map(movie => <MovieItem key={ movie.movieCd } movie={ movie }/>) } 
        </div>
        
    );
}

export default MovieList;