const API_KEY = '1da2a56adea147bfe6de4427f0bac836';

const getDateFormat = () => {

    const today = new Date();

    return `${today.getFullYear()}${today.getMonth() < 10 ? '0' + (today.getMonth()+1) : (today.getMonth()+1) }${today.getDate()-1}`;
}

export async function getMovieList() {
    
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${ API_KEY }&targetDt=${ getDateFormat() }`;
    const res = await fetch(url);
    const data = await res.json();

    return data.boxOfficeResult.dailyBoxOfficeList;
    
}

export async function getMovieDetail(movieCd) {
    
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${ API_KEY }&movieCd=${movieCd}`;
    const res = await fetch(url);
    const data = await res.json();
    
    return data.movieInfoResult.movieInfo;
    
}

export async function getActorFilmo(peopleNm) {
    
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=${ API_KEY }&peopleNm=${peopleNm}`;
    const res = await fetch(url);
    const data = await res.json();

    return data.peopleListResult.peopleList.filter(people => people.repRoleNm === '배우');
    
}
  