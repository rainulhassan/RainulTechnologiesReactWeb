import {
  
 Container,
  Row,
  Col,
  Card,
  Button
  
 } from "react-bootstrap";
const Footrsld = ()=> {
    const design=(
       <>

 
<Container className="mt-5" id="containertest">
    <Card className="card shadow-lg p-3 mb-5 bg-info rounded" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
 <Card.Body>
      <Row>
      <Col md="6" className="text-center" style={{animationDuration:"3s"}}>
            <h1>Get in Touch</h1>
            <p >Submit your project request or call us directly to discuss your project requirement and budget.</p>
         </Col>

         <Col md="6" className="text-center" style={{fontSize:"40px"}}>
         <Button className="btn  px-5 py-3 btn-lg  pulse-grow-on-hover" >971 671 9924</Button>
         </Col>
      
      </Row>
      </Card.Body>
      </Card>
    </Container>


</>
    );
    return design;
    }
    export default Footrsld;
