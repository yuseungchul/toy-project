import RestaurantRegistForm from '../components/form/RestaurantRegistForm';
import './regist.css';
function RegistRestaurant() {

    return(
        <>  
        
            <div className="container">
                <div className="item">
                <img className="regisimage" alt="regis_01" src="/images/images_main/register_picture.jpg"/>
                </div>
        
                <div className="item">
                    <h1>메뉴 등록 페이지</h1>
                    <RestaurantRegistForm/>
                </div>

                <div className="item">
                    <div className="bottomword">
                        <h1 className="bottomtitle">강남뭐먹지?!</h1>
                        <p><b>02-1234-5678</b><br/>
                           <b>서울시 강남구 테헤란로 24</b><br/>
                           <b>gangnam@mysite.com</b></p>
                    </div>
                </div>
                
               
            </div>
        </>
    );
}

export default RegistRestaurant;