import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { callGetRestaurantAPI } from '../../apis/RestaurantAPICalls';

function Restaurant({ id }) {

    const result = useSelector(state => state.restaurantReducer);
    const restaurant = result.restaurant;
    const dispatch = useDispatch();

    useEffect(
        () => {
            /* restaurant 호출 API */
            dispatch(callGetRestaurantAPI(id));
        },
        []
    );

    return (
        restaurant && (
            <>
                <h3>가게 이름 : { restaurant.storetNm }</h3>
                <h3>메뉴 가격 : { restaurant.price }</h3>
                <h3>메뉴 종류 : { restaurant.category }</h3>
                <h3>메뉴 상세 : { restaurant.menu}</h3>
                {/* <img src={ restaurant.detail.image } style={ { maxWidth: 500 } } alt={ restaurant.menuName }/> */}
            </>
        )
    );
}

export default Restaurant;