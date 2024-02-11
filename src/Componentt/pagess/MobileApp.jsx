import {
  
   Container,
    Row,
    Col
    
   } from "react-bootstrap";

const Mobileapppp = ()=> {
    const design=(
       <>


<div className="container-fluid p-0">
<Row>
  <Col lg="12">
<section className="jumbotron back-image" style={{backgroundImage:'url(Myimages/myimg4-min.jpg)'}}>

 <div class="testing">
      <h1 className="text-uppercase text-center text-danger font-weight-bold">Mobile App Development</h1>
      <p className="text-light">We specialize in creating end-to-end tailor-made mobile solutions using the latest skills and with a seamless native user interface design</p>
    </div>
  </section>
  </Col>
  </Row>
 
  </div>

   
  <Container>
  <Row className="mt-5">
    <Col md="12" className="text-center">
      <h1 className="mt-5" data-aos="zoom-in" data-aos-duration="2000">Mobile Application Development</h1>
      
      </Col>
    </Row>

</Container>


<Container className="mt-5">
  <Row>
    <Col md="6" data-aos="fade-right"  data-aos-duration="2000">

  <p className="text-start">

  We Rainul technologies that specialize in iOS & Android mobile app design and development<br/>
We have the capability to develop and deliver the best android and ios apps.<br/><br/>
We are a custom mobile app development company that offers clients extensive technical proficiencies
 and the ability to produce software that meets their requirements regardless of a project’s scale.<br/><br/>

We have helped our clients grow revenue, boost brand engagement and launch new digital businesses on a global platform.
 From discovery to the deployment of your new app development project or maintenance support to upgrade or modernization of your existing apps,
  we can be your one-stop partner.<br/><br/>

We here at Rainul Technologies specialize in creating end-to-end tailor-made mobile solutions using the latest skills and with a seamless native user interface design.
 </p>
</Col>

 
<Col md="6" data-aos="fade-left" data-aos-duration="2000">

    <img  src="Myimages/mobileapp-min.jpg" width="1000" height="1000" className="img-fluid"/>
</Col>



</Row> 
</Container>
      
     
   
       </>
    );
    return design;
    }
    export default Mobileapppp;