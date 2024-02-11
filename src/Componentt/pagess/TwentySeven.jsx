import {
  
   Container,
    Row,
    Col
    
   } from "react-bootstrap";

const Twenty4 = ()=> {
    const design=(
       <>


<div className="container-fluid p-0">
<Row>
  <Col lg="12">
<section className="jumbotron back-image" style={{backgroundImage:'url(Myimages/myimg4-min.jpg)'}}>

 <div class="testing">
      <h1 className="text-uppercase text-center text-danger font-weight-bold">24*7 Support</h1>
      <p className="text-light">We provide tech support services to address your issues on call. Call us or submit your request online, we will get in touch with you.</p>
    </div>
  </section>
  </Col>
  </Row>
 
  </div>

   
  <Container>
  <Row className="mt-5">
    <Col md="12" className="text-center">
      <h1 className="mt-5" data-aos="zoom-in" data-aos-duration="2000">24*7 Support</h1>

      </Col>
    </Row>

</Container>


<Container className="mt-5">
  <Row>
    <Col md="6" data-aos="fade-right"  data-aos-duration="2000">

  <p className="text-start">

  We provide tech support services to address your issues on call. Call us or submit your request online, and we will get in touch with you.
By opting to work with us, you will receive a 24/7 support service that offers fast communication and response and instant support.<br/><br/>

We work closely with our clients and we make sure that our client’s website is maintained in a professional manner.
We help you to concentrate on your core business by keeping you free from web management services<br/><br/>

Whenever you need any help, call us directly or submit a request via email We will respond to you on your emails or calls and your query would be solved shortly.<br/>

<strong> Our Services</strong><br/>
24*7 Support<br/>
Domain Booking<br/>
Website Hosting<br/>
Website Maintenance

 </p>
</Col>

 
<Col md="6" data-aos="fade-left" data-aos-duration="2000">

    <img  src="Myimages/support-min.jpg" width="1000" height="1000" className="img-fluid"/>
</Col>



</Row> 
</Container>
      
     
   
       </>
    );
    return design;
    }
    export default Twenty4;