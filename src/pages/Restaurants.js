import RestaurantList from "../components/lists/RestaurantList";

function Restaurants() {


    return (
        <div>
            <h1>메뉴 목록 </h1>
            <button onClick >메뉴 등록</button>
            <RestaurantList/>
        </div>
    );
}

export default Restaurants;