import "bootstrap/dist/css/bootstrap.min.css";


import {
 
  Container,
  Row,
  Col

} from "react-bootstrap";



const Abtt = ()=> {

const design=(
      <>
       
      
   <Container>
  <Row className="mt-5">
    <Col md="12" >
      <h1 className="mt-5 text-center" data-aos="zoom-in" data-aos-duration="2000">About US</h1>
      <div className="divider"></div>
      </Col>
    </Row>

</Container>


<div className="container-fluid mt-5" style={{maxWidth:"1550px"}}>
  <Row>
    <Col md="6"  data-aos="fade-right"  data-aos-duration="2000">

  <p className="text-start">

  Rainul Technologies is a Software development company based in New Delhi specializes services
   in website development, website designing, mobile application development for Android and IOS, graphics designing, SEO services, branding, and more.<br/><br/>

We firmly believe in long term relationships with our client<br/><br/>

Our clients are located around the globe. We understand our client’s needs and are always ready to help them to improve their business performance. We offer innovative and world-class high-quality, and eye-capturing services to our clients.
We offer reliability, quality, and performance at very affordable rates matching the best in the industry.<br/><br/>
Our developers utilize the latest cutting-edge technology and have extensive experience in Mobile Technologies, Software Development, Data Warehousing, Business Intelligence, IT Staffing Solutions, and more.

 </p>
</Col>

 
<Col md="6"  data-aos="fade-left" data-aos-duration="2000">

    <img  src="Myimages/abt1.jpg" width="1000" height="1000" className="img-fluid"/>
</Col>



</Row> 
</div>
 

  </>


  );
  return design;
  }
  export default Abtt;