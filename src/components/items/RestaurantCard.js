import { Link } from  'react-router-dom';

function RestaurantCard({ restaurant }) {

    return (
        <Link to={ `/restaurant/${ restaurant.id }` }>
            <div className="menuItem">
                <h3>이름 : { restaurant.storetNm }</h3>
                <h3>가격 : { restaurant.price }</h3>
                <h4>종류 : { restaurant.category }</h4>
            </div>
        </Link>
    );
}

export default RestaurantCard;