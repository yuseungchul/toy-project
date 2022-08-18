import RestaurantList from "../components/lists/RestaurantList";
import { Link } from 'react-router-dom';



function Restaurants() {




    return (
        <div>
            <h1>메뉴 목록 </h1>
            <Link to="./regist" >
                <button>메뉴 등록</button>
            </Link>
            <RestaurantList/>
        </div>
    );
}

export default Restaurants;