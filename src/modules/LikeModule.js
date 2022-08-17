import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {};

/* 액션 타입 설정 */
const INCREASE = 'like/INCREASE';
const DECREASE = 'like/DECREASE';
const SET_LIKE = 'like/SET_LIKE';


/* 스토어 관련 액션 함수 */
export const { like : { increase, decrease, setLike }} = createActions({
    [INCREASE]: (amount = 1) => ({ incrementValue : amount}),
    [DECREASE]: (amount = 1) => ({ decrementValue : amount}),
    [SET_LIKE]: (amount = 1) => ({ amount }),
});

/* 리듀서 함수 */
const likeReducer = handleActions(
    {   
        [INCREASE]: (state, { payload : { incrementValue } }) => {
            return state + incrementValue;
        },
        [DECREASE]: (state, { payload : { decrementValue } }) => {
            return state - decrementValue;
        },
        [SET_LIKE]: (state, { payload : { amount } }) => {
            return amount;
        }
    },
    initialState
);

export default likeReducer;

