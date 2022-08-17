import { Link } from  'react-router-dom';

function RestaurantCard({ restaurant }) {

    return (
        <Link to={ `/restaurant/${ restaurant.id }` }>
            <div className="menuItem">
                <h3>상호명 : { restaurant.storetNm }</h3>
                <h3>좋아요 : { restaurant.like }</h3>
                <img src={ restaurant.detail.images_category} style={ { width: 500, height: 500 } } alt={ restaurant.storetNm }/>
            </div>
        </Link>
    );
}

export default RestaurantCard;