import RestaurantList from "../components/lists/RestaurantList";
import { Link } from 'react-router-dom';


function Restaurants() {


    return (
        <div>
            <h1>메뉴 목록 </h1>
            <Link to="./regist" >
                <button>메뉴 등록</button>
            </Link>
            <button>이름순 정렬</button>
            <button>좋아요 순 정렬</button>
            <RestaurantList/>
        </div>
    );
}

export default Restaurants;