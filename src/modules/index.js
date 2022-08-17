import restaurantReducer from "./RestaurantModule";
import likeReducer from "./LikeModule";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    restaurantReducer,
    likeReducer
});

export default rootReducer;