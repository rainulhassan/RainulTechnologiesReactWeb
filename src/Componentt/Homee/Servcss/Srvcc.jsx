import "bootstrap/dist/css/bootstrap.min.css";
import './Srvcc.css';

import {
 
  Container,
  Row,
  Col,
  Card

} from "react-bootstrap";



const Srvcc = ()=> {
 
const design=(
      <>
       
     
  
       <section id="services">

<Container className="mt-5 text-center">
  <Row>
    <Col lg="12">
      <h1 className="mt-5"  data-aos="zoom-in" data-aos-duration="2000">Our Services</h1>
      <div className="divider mt-3"></div>
      <p className="mt-3" data-aos="zoom-in-up" data-aos-duration="2000" >
      We provide website development services that are on the cutting edge of today’s technologies. 
      We offer responsive web design, web development, mobile app, eCommerce website, graphics design, and SEO services at a very affordable price
         </p>
     </Col>
    </Row>
 


 <Row className="mt-5">

 <Col md="4" className="mt-3">
   <Card className="shadow-sm bg-white" id="mycard"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
<Card.Body>
             <div className="service-item text-center">
                <div className="service-icon"> <i className="fas fa-code"></i></div></div>
          <h4> Web Development</h4>
          <p>
          We offer website development and design services for all types of businesses. And customize it to fit your requirements. </p>
          </Card.Body>
          </Card>
        </Col>
        
   
        <Col md="4" className="mt-3">
          <Card className="shadow-sm bg-white" id="mycard"  data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
<Card.Body>
     <div className="service-item text-center">
                <div className="service-icon"><i className="fa-solid fa-paintbrush"></i></div></div>
          <h4> Web Design</h4>
          <p>
          If you’re looking to launch your brand-new website and redesigned your old website then we are the one to help you. </p>
          </Card.Body>
          </Card>
           </Col>

           <Col md="4" className="mt-3">
    <Card className="shadow-sm bg-white" id="mycard"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
<Card.Body>
          <div className="service-item text-center">
                <div className="service-icon"><i className="fas fa-mobile-alt"></i></div></div>
          <h4> Mobile App Development</h4>
          <p>
          We specialize in creating end-to-end tailor-made mobile solutions using latest skills and with a seamless native user interface design </p>
          </Card.Body>
          </Card>
          </Col>

          <Col md="4" className="mt-3">
    <Card className="shadow-sm bg-white" id="mycard" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
<Card.Body>
       <div className="service-item text-center">
                <div className="service-icon"><i className="fa-solid fa-pen-to-square"></i></div></div>
          <h4> Graphics Design </h4>  
          <p>
          We offer customized logo designs illustrating your company objectives, ideas, and values. Contact us today for Graphics Design Services  </p>
          </Card.Body>
          </Card>
           </Col>



           <Col md="4" className="mt-3">
    <Card className="shadow-sm bg-white" id="mycard" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
<Card.Body>
          <div className="service-item text-center">
                <div className="service-icon"><i className="fas fa-search"></i></div></div>
          <h4>SEO Optimization</h4>
          <p> 
          We work actively with our associates and partners to provide the best SEO services. We offer affordable and effective SEO services. </p>
          </Card.Body>
          </Card>
          </Col>

    <Col md="4" className="mt-3">
    <Card className="shadow-sm bg-white" id="mycard"  data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
<Card.Body>
             <div className="service-item text-center">
                <div className="service-icon"><i className="fa-solid fa-headphones"></i></div></div>
          <h4> 24*7 Support</h4>
          <p>
          We provide tech support services to address your issues on call. Call us or submit your request online, we will get in touch with you. </p>
          </Card.Body>
          </Card>
           </Col>

 
  </Row>
</Container>
</section>

<section id="skills">
<Container className="mt-5 text-center">
  <Row>
    <Col lg="12">
      <h1 className="mt-5" data-aos="zoom-in" data-aos-duration="2000">Technologies we specialized in</h1>
        <div className="divider"></div>
        <p className="mt-3" data-aos="zoom-in-up" data-aos-duration="2000">
        Our Developer and Designers have expertise in various technologies like HTML, CSS, JavaScript, Jquery, AngularJs, ReactJs, Java, ASP .Net, Php, Python, Kotlin, WordPress, Joomla, Magento, Laravel.. and others</p>
        </Col>
    </Row>
    </Container>


    <Container className="mt-5 text-center wow slideInLeft">
    <Row>
    <Col lg="12" className= "text-center">

        <marquee behavior="alternate">
    
          <i className="fab fa-abacus" id="myskills"></i>
        
        <i className="fab fa-css3" id="myskills"></i>
        
        <i className="fab fa-js" id="myskills"></i>
            
            
        <i className="fab fa-angular" id="myskills"></i>
        
        <i className="fab fa-php" id="myskills"></i>
        
        <i className="fab fa-react" id="myskills"></i>
        
        <i className="fab fa-wordpress" id="myskills"></i>
        
        <i className="fab fa-java" id="myskills"></i>
        
        <i className="fab  fa-android" id="myskills"></i>
        
        <i className="fab fa-apple" id="myskills"></i>
        
        <i className="fab  fa-swift" id="myskills"></i>
        
        
        </marquee>
</Col>
        </Row>
       </Container>
</section>

  </>


  );
  return design;

  }
 
  export default Srvcc;