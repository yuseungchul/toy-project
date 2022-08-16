import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {};

/* 액션 타입 설정 */
const GET_RESTAURANTLIST = 'restaurant/GET_RESTAURANTLIST';
const GET_RESTAURANT = 'restaurant/GET_RESTAURANT';
const REGIST_RESTAURANT = 'restaurant/REGIST_RESTAURANT';


/* 스토어 관련 액션 함수 */
export const { restaurant : { getRestaurantlist, getRestaurant, registRestaurant }} = createActions({
    [GET_RESTAURANTLIST]: (res) => ({ restaurantlist : res }),
    [GET_RESTAURANT]: (res) => ({ restaurant : res }),
    [REGIST_RESTAURANT]: (res) => ({ regist : res })
    
});

/* 리듀서 함수 */
const restaurantReducer = handleActions(
    {   
        [GET_RESTAURANTLIST]: (state, { payload }) => {
            return payload;
        },
        [GET_RESTAURANT]: (state, { payload }) => {
            return payload;
        },
        [REGIST_RESTAURANT]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default restaurantReducer;

