import "./main.css";
import { Link } from 'react-router-dom';
import Footer from "../components/commons/Footer";

function Main() {
    return(
       <>
        <div className="container">
            <img className="headerimage" alt="header_01" src="/images/images_main/main_header.jpg"/>
             <h1 className="center_title1"> 솔직한 리뷰, 믿을 수 있는 평점!<br/><br/><br/>&nbsp; &nbsp;&nbsp;&nbsp; 강남뭐먹지</h1>
        </div>
        <div className="containerbox">
            <p>강남뭐먹지?!</p>
        </div>
        <div className="borderline"></div>
        
        <div className="fullbox">

            <div className="subbox">
                <div className="menubox">
                <img className="contentimage" alt="ko" src="/images/images_main/main_ko.jpg"/>
                </div>

                <div className="menubox">
                <img className="contentimage" alt="ch" src="/images/images_main/main_ch.jpg"/>               
                </div>

                <div className="menubox">
                <img className="contentimage" alt="bun" src="/images/images_main/main_wes.jpg"/>
                </div>
                <div className="menubox">
                <img className="contentimage" alt="jp" src="/images/images_main/main_jp.jpg"/>
                </div>

                <div className="menubox">
                <img className="contentimage" alt="bun" src="/images/images_main/main_bun.jpg"/> 
                </div>

                <div className="menubox">
                <img className="contentimage" alt="bun" src="/images/images_main/register_img.jpg"/>
                </div>
                <div className="click"> 
                <Link to="./restaurant" >
                    <h1 className="clickbox">맛집보러가기 Click!</h1>
                </Link>
                </div>

               
            </div>
            <div className="footbox">
                <b >강남 뭐먹지?! Tel. 02-1234-5678  서울시 강남구 테헤란로24  gangnam@mysite.com</b>
                </div>
        </div>

        
    </>
    );
}

export default Main;