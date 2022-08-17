import Restaurant from "../components/items/Restaurant";
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import ReviewRegistForm from '../components/form/ReviewRegistForm';
import LikeModifyForm from '../components/form/LikeModifyForm';

function RestaurantDetail() {

    
    const { id } = useParams();
    const result = useSelector(state => state.restaurantReducer);

  
    return (
        <div>
            <h1>가맹점 상세</h1>
            <Restaurant id={ id }/>
            <ReviewRegistForm/>
            <LikeModifyForm/>
        </div>
    );
}

export default RestaurantDetail;