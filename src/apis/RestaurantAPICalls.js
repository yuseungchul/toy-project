import { request } from "./Api"; 
import { getRestaurantlist, getRestaurant, registRestaurant, registReview, modifyLike} from "../modules/RestaurantModule";
import {setLike} from "../modules/LikeModule";
import { getDefaultNormalizer } from "@testing-library/react";

export function callGetRestaurantListAPI() {
    
    console.log('getRestaurantList api calls...');
    
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        
        /* Api의 axios 처리 참조  */
        const result = await request('GET', '/restaurant');
        console.log('getRestaurantList result : ', result);
        
        /* action 생성 함수에 결과 전달하며 dispatch 호출 */
        dispatch(getRestaurantlist(result));
    }
}

export function callGetRestaurantAPI(id) {
    
    console.log('getRestaurant api calls...');

    return async (dispatch, getState) => {
    
        const result = await request('GET', `/restaurant/${id}`);
        console.log('getRestaurant result : ', result);
    
        dispatch(getRestaurant(result));
        dispatch(setLike(result.like));
    }
}

export function callRegistRestaurantAPI(restaurant) {
    
    console.log('registRestaurant api calls...');

    return async (dispatch, getState) => {
    
        const result = await request('POST', '/restaurant/', restaurant);
        console.log('registRestaurant result : ', result);
    
        dispatch(registRestaurant(result));
    }
}

export function callRegistReviewAPI(restaurant) {
    
    console.log('registReview api calls...');

    return async (dispatch, getState) => {

        const updateComment = await request('GET', `/restaurant/${restaurant.id}`);
        updateComment.detail.comments.push(restaurant.detail.comments);
        console.log(updateComment);

        const result = await request('PUT', `/restaurant/${restaurant.id}`, updateComment);
        console.log('registReview result : ', result);
    
        dispatch(registReview(result));
    }
}


export function callLikeModifyAPI(restaurant,data) {
    
    console.log('modifyLike api calls…');

    return async (dispatch, getState) => {

        console.log("data::",data)

        const like = data.like +1
        const updateData = { ...data ,like}

        console.log("updateData::",updateData)


        const result = await request('PUT', `/restaurant/${data.id}`, updateData);
        console.log('registReview result : ', result);
    
        dispatch(modifyLike(result));
    }
}

