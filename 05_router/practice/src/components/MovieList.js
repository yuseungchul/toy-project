import {useState, useEffect, useCallback, useRef} from "react";
import axios from "axios";
import movieItem from "./MovieItem";
import styled from "styled-components";

function MovieList(){

    const [value, setvalue] = useState("");
    const [date, setDate] = useState("");
    const [movies, setMovie] = useState(null);
    const focus = useRef(null);

    
  const onChange = useCallback(e => {
    setvalue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const num = parseInt(value);
      if (!value || !num || value.length !== 8) 
      return;

      setDate(value);
      setvalue("");
      focus.current.focus();
    },
    [value]
  );

  useEffect(() => {
    const query = date || "20190101";
    axios
      .get(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=개인키&targetDt=${query}`
      )
      .then(res => setMovie(res.data.boxOfficeResult.dailyBoxOfficeList))
      .catch(e => console.log(e));
  }, [date]);
    
  if(!movies){
    return null;
  }

  return (
    <ListBlock>
      <div>
        <div className="fdiv">영화순위</div>
        <form className="date" onSubmit={onSubmit}>
          <input
            className="input"
            value={value}
            onChange={onChange}
            ref={focus}
            placeholder=" 궁금한 날 예) 20190105 처럼 입력"
          />
          <button>검색</button>
        </form>
        {movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </div>
    </ListBlock>
  );
};



export default MovieList;