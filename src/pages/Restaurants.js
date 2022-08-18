import RestaurantList from "../components/lists/RestaurantList";
import { Link } from 'react-router-dom';
import "../components/lists/RestaurantList.css";



function Restaurants() {




    return (
        <div>
            <h1>메뉴 목록 </h1>
            <Link to="./regist" >
                <button className="inputRestaurantButton">가맹점 등록</button>
            </Link>
            <RestaurantList/>
        </div>
    );
}

export default Restaurants;