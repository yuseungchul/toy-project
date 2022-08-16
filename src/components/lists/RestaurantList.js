import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from '../items/RestaurantCard';
import { callGetRestaurantListAPI } from "../../apis/RestaurantAPICalls";


function RestaurantList() {

    const result = useSelector(state => state.restaurantReducer);
    const restaurantList = result.restaurantlist;
    const dispatch = useDispatch();

    console.log(result);

    useEffect(
        () => {
            /* stoList 호출 API */
            dispatch(callGetRestaurantListAPI());
        },
        []
    );
    

    return (
        restaurantList && (
            <div className="menuBox">
                { restaurantList.map(restaurant => <RestaurantCard key={ restaurant.id } restaurant={ restaurant }/>) }
            </div>
        )
    );
}

export default RestaurantList;