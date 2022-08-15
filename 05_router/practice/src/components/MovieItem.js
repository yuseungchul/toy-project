
function MovieItem( { movie }){

    const { rank, rankOldAndNew, movieNm} = movie;
    return (
       <>
        <div className="rank">
          {rank}
        <div className="new">{rankOldAndNew === "OLD" ? "" : rankOldAndNew}</div>
        </div>
        <div className="title">{movieNm}</div>
      </> 
    );
}

export default MovieItem;