import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from '../items/RestaurantCard';
import { callGetRestaurantListAPI, callSortAPI, callLikeSortAPI, callSelectCategoryAPI } from "../../apis/RestaurantAPICalls";
import "../../pages/main.css";


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
    
    const ascList=()=>{
        dispatch(callSortAPI())
    }

    const likeList=()=>{
        dispatch(callLikeSortAPI())
    }

    const categoryList=(categoryNm)=>{

        dispatch(callSelectCategoryAPI(categoryNm))

    }
    return (
        restaurantList && (
            <>
            <div class='mainbuttonbox'>
                <button onClick={ascList} className='sortbuttonbox'>이름순 정렬</button>
                <button onClick={likeList} className='sortbuttonbox'>좋아요 순 정렬</button>
            </div>
            <button onClick={ () => { categoryList('한식') }}>한식</button>
            <button onClick={ () => { categoryList('중식') }}>중식</button>
            <button onClick={ () => { categoryList('양식') }}>양식</button>
            <button onClick={ () => { categoryList('일식') }}>일식</button>
            <button onClick={ () => { categoryList('분식') }}>분식</button>
            <div className="menuBox">
                { restaurantList.map(restaurant => <RestaurantCard key={ restaurant.id } restaurant={ restaurant }/>) }
            </div>
            </>
        )
    );
}

export default RestaurantList;