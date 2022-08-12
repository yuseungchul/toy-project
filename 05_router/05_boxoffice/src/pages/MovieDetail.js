import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetail } from '../api/MovieAPI';
import { Link } from 'react-router-dom';


function MovieDetail() {    

    const { movieCd } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState({
        movieCd : '',
        movieNm : '',
        movieNmEn : '',
        showTm : '',
        nations : [],
        companys : [],
        actors : []
    });

    useEffect(
        () => {
            getMovieDetail(movieCd)
                .then(data => setMovie(data));
        },
        [movieCd]
    );

    console.log(movie);

    const actorClickHandler = (e) => {
        navigate(`/movie/actor?actorName=${ e.target.textContent }`);
    }

    const nations = movie.nations.map(nation => <span>{nation.nationNm}</span>); 
    const companys = movie.companys.map(company => <div><span>{company.companyNm}</span>-<span>{company.companyPartNm}</span></div>); 
    const actors = movie.actors.filter((item, index) => index < 5).map(actor => <div><span onClick={ actorClickHandler } className='actor'>{actor.peopleNm}</span><span>{actor.cast && `-${actor.cast}역`}</span></div>); 
    
    return(
        <div className='content-col'>  
            
                <h1>{movie.movieNm}({movie.movieNmEn})</h1>
                <div>러닝타임 : {movie.showTm}분</div>
                <div>국가 : {nations}</div>
                <div>출연</div> 
                <div>{actors}</div>
                <div>제작/배급/제공</div> 
                <div>{companys}</div>
                <Link to='/movie'>목록으로</Link>
            
        </div>
        
    );

}

export default MovieDetail;