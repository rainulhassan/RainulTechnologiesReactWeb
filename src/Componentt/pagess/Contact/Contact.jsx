import './Contactt.css';
import Frm2 from "../../Homee/Frm2/Frm2.jsx";



import {
  
 Container,
  Row,
  Col
  
 } from "react-bootstrap";

const Contacttt = ()=> {
    const design=(
       <>

<div className="container-fluid p-0">
<Row>
  <Col lg="12">
<section className="jumbotron back-image" style={{backgroundImage:'url(Myimages/myimg4-min.jpg)'}}>

 <div className="testing">
      <h1 className="text-uppercase text-center text-danger font-weight-bold">Contact Us</h1>
      <p className='text-center text-light'>
Contact Us
Contact us today for high quality web & Mobile application design and development solution.</p>
     
    </div>
  </section>
  </Col>
  </Row>
 
  </div>



  <Frm2/>



 


</>
    );
    return design;
    }
    export default Contacttt;
