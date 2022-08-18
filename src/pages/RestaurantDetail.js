import Restaurant from "../components/items/Restaurant";
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import ReviewRegistForm from '../components/form/ReviewRegistForm';


function RestaurantDetail() {

    
    const { id } = useParams();

  
    return (
        <div>
            <Restaurant id={ id }/>
            <ReviewRegistForm/>
          
        </div>
    );
}

export default RestaurantDetail;