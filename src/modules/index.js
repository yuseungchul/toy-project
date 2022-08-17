import restaurantReducer from "./RestaurantModule";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    restaurantReducer
});

export default rootReducer;