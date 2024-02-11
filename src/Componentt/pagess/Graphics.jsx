import {
  
   Container,
    Row,
    Col
    
   } from "react-bootstrap";

const Graphicsss = ()=> {
    const design=(
       <>


<div className="container-fluid p-0">
<Row>
  <Col lg="12">
<section className="jumbotron back-image" style={{backgroundImage:'url(Myimages/myimg4-min.jpg)'}}>

 <div className="testing">
      <h1 className="text-uppercase text-center text-danger font-weight-bold">Graphics Design</h1>
      <p className="text-light">We offer customized logo designs illustrating your company objectives, ideas, and values.</p>
    </div>
  </section>
  </Col>
  </Row>
 
  </div>

   
  <Container>
  <Row className="mt-5">
    <Col md="12" className="text-center">
      <h1 className="mt-5" data-aos="zoom-in" data-aos-duration="2000">Graphics Design</h1>
      </Col>
    </Row>

</Container>


<Container className="mt-5">
  <Row>
    <Col md="6" data-aos="fade-right"  data-aos-duration="2000">

  <p className="text-start">
  We offer customized logo designs illustrating your company objectives, ideas, and values.<br/><br/>

We create visual concepts that inspire and captivate customers. We are proficient in different designing
 tools and have remarkable experience in handling web designing projects. <br/><br/>

All our Visual Communication and Graphic Design Services employ innovative ideas to create and combine words, 
symbols and images to create a visual representation of ideas and messages.<br/><br/>

<strong>OUR SERVICES</strong><br/>
Business Cards<br/>
Brochure Designs<br/>
Logo Design<br/>
Catalog Designs<br/>
BANNERS AND ADVERTISEMENT<br/>
2D AND 3D ANIMATION<br/>
Envelope Design<br/>
Letterhead Design

 </p>
</Col>

 
<Col md="6" data-aos="fade-left" data-aos-duration="2000">

    <img  src="Myimages/grph.jpg" width="1000" height="1000" className="img-fluid"/>
</Col>



</Row> 
</Container>
      
     
   
       </>
    );
    return design;
    }

    export default Graphicsss;