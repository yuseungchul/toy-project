import { useSearchParams } from 'react-router-dom';
import { getActorFilmo } from '../api/MovieAPI';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ActorFilmo() {
    
    const [searchParams] = useSearchParams();
    const actorName = searchParams.get('actorName');

    const [filmo, setFilmo] = useState([]);

    useEffect(
        () => {
            getActorFilmo(actorName)
                .then(data => setFilmo(data));
        },
        [actorName]
    );

    const first = filmo[0]?.filmoNames;
    const others = filmo.filter((item, index) => index > 0).map(people => <div>{ actorName } - {people.filmoNames}</div>);

    return (
        <div className="content-col">
            <h1>배우 { actorName } 필모그래피 검색 결과</h1>
            <div>
                { first ? first : '검색 결과가 없습니다.'}
            </div>
            <h2>같은 이름 다른 인물</h2>
            <div>
                { Array.isArray(others) && others.length ? others : '검색 결과가 없습니다.'}
            </div>
            <Link to='/movie'>목록으로</Link>
        </div>
    );
}

export default ActorFilmo;