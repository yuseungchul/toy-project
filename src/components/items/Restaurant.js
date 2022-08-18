import { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { callGetRestaurantAPI,callLikeModifyAPI } from '../../apis/RestaurantAPICalls';
import { increase } from '../../modules/LikeModule';
import { FcLike, FcLikePlaceholder,FcAlarmClock,FcCallback,FcHome, FcReading , FcCloseUpMode} from "react-icons/fc";
import "./Restaurant.css";
import { TbMessage } from "react-icons/tb";
import { IoMdPin } from "react-icons/io";
import { MdOutlineDeliveryDining } from "react-icons/md";


function Restaurant({ id }) {

    const result = useSelector(state => state.restaurantReducer);
    const restaurant = result.restaurant;
    const dispatch = useDispatch();
    const like = useSelector(state => state.likeReducer);
    const [upLike,setUpLike] = useState(false);

    


    useEffect(
        () => {
            /* restaurant 호출 API */
            dispatch(callGetRestaurantAPI(id));
        },
        [like]
    );

    function onClickHandler(){
        setUpLike(!upLike);
        dispatch(callLikeModifyAPI(restaurant,upLike));
        dispatch(increase());
        
    }

    return (
        restaurant && (
            <>
                <div className='detailPage'>
                    <div className='detailInfoleft'>
                        <div className='detailRestaurantNm'><h3><FcHome/> { restaurant.storetNm }</h3></div>
                        <h2><button  className='detailLike'onClick={ onClickHandler }>
                                {upLike ? <FcLike/>: <FcLikePlaceholder/>}</button> { like } &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <TbMessage/> Review { (restaurant.detail.comments).length }</h2>
                        <img src={ restaurant.detail.images_category} style={ { width: 500, height: 500 } } alt={ restaurant.storetNm }/>
                    </div>
                    <div className='detailInfoRight'>
                        <h2><FcCloseUpMode/> &nbsp; 가게정보 &nbsp; <FcCloseUpMode/></h2>
                        <h2><IoMdPin/> &nbsp; 주소 &nbsp;&nbsp;&nbsp;{ restaurant.address }</h2>
                        <h2><FcAlarmClock/> &nbsp; 영업시간 &nbsp;&nbsp;&nbsp;{ restaurant.operationHour }</h2>
                        <h2><FcCallback/> &nbsp; 전화번호 &nbsp;&nbsp;&nbsp;{ restaurant.phone}</h2>
                        <h2><FcReading/> &nbsp; 대표메뉴 &nbsp;&nbsp;&nbsp; { `${restaurant.menu} : ${restaurant.price}`}</h2>
                        <h2><MdOutlineDeliveryDining/> &nbsp; 배달 &nbsp;&nbsp;&nbsp; 
                            { (restaurant.isDelivery == 'Y')? '배달가능':'배달불가'}</h2>
                    </div>
                        <h2><FcCloseUpMode/> &nbsp; REVIEW &nbsp; <FcCloseUpMode/> { (restaurant.detail.comments).map((value,index) => (<li key={index}>{value}</li>))}</h2>
                </div>
            </>
        )
    );
}
export default Restaurant;