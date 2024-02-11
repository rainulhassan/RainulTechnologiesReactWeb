import './mysliddd.css';
import {
    CarouselItem,
    Carousel,
    Container,
    

} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Mysliddd = ()=> {
    const design=(
       
    <> 


<Carousel variant="info">
  <Carousel.Item>
    <img
     className="slideimg"
      src="Myimages/myimg4-min.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <div id="slidecaption">
      <Container>
      <h1 id="slidecaption">
      We buil<span id="hh1">d i</span>nnovative <span>Websites</span> and
<span> Mobile</span> apps
      </h1>
      </Container>
   </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slideimg"
      src="Myimages/ss33.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <div id="slidecaption">
      <h1 id="slidecaption">We <span id="hh1">Transform</span> Your Vision into Creative<span> Results</span></h1>
 </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slideimg"
      src="Myimages/ra13-min.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <div id="slidecaption">
      <h1><span id="hh1">Contact</span> us today and <span id="hh1">get</span> the best solution <span>for</span> your<span> business</span> </h1>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</>  

    );
    return design;
    }
    export default Mysliddd ;
