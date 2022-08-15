import '../pages/Detail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';

function Detail(){

    return (
      <>
        <header>
          <nav>
            <h3>강남뭐먹지?!</h3>
          </nav>
        </header>
        <body>
          <div>
            <div className="restaurantNm">해목</div>
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
            <img className="image1" src="images/해목1.png" alt="해목1"/>
            <img className="image2" src="images/해목2.png" alt="해목2"/>
            <img className="image3" src="images/해목3.png" alt="해목3"/>
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

export default Detail;