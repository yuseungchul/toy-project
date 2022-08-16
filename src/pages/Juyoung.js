import '../pages/Juyoung.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';

function Juyoung(){

    return (
      <>
        <header>
          <nav>
            <h3>강남뭐먹지?!</h3>
          </nav>
        </header>
        <body>
          <div>
            <div className="restaurantNm">해목(HaeMok)</div>
            <div className="categoryNm">일식</div>
            <br />
          </div>
          <div>
            <div className="like">❤️</div>
            <div className="likeCount">921</div>
            <div className="review">리뷰갯수</div>
            <div className="reviewCount">5</div>
          </div>
          <div className='images'>
            <img className="image1" src="images/images_detail/ja_22_01.jpg" alt="haemok1"/>
          </div>
          <div>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Nav className= "me-auto">
                  <div className='navHome'><Nav.Link href="#home">Home</Nav.Link></div>
                  <div className='navMenu'><Nav.Link href="#features">Menu</Nav.Link></div>
                  <div className='navReview'><Nav.Link href="#pricing">Review</Nav.Link></div>
                </Nav>
              </Container>
            </Navbar>
          </div>
        </body>
      </>
    );

}

export default Juyoung;