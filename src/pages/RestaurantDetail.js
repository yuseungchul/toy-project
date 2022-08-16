import Restaurant from "../components/items/Restaurant";
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';

function RestaurantDetail() {

    
    const { id } = useParams();
    const result = useSelector(state => state.restaurantReducer);

  
    return (
        <div>
            <h1>가맹점 상세</h1>
            <Restaurant id={ id }/>
        </div>
    );
}

export default RestaurantDetail;