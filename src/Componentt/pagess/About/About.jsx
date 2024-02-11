import Allheaderimg from '../../Homee/Allheaderimg';
import Footrsld from "../../Homee/Footrsld.jsx";
import Abtt from '../../Homee/Abtuss/Abtt';
import "bootstrap/dist/css/bootstrap.min.css";

import {
 
  Container,
  Row,
  Col,
  Card,
  Button

} from "react-bootstrap";



const About = ()=> {
    const design=(
       <>


      
        <Allheaderimg/>
        <Abtt/>


        <div className="container-fluid p-0 mt-5">
  <Row>


  <Col md="6" data-aos="fade-left" data-aos-duration="2000">

<img  src="Myimages/myimg3-min.jpg" width="1000" height="1000" className="img-fluid mt-5"/>
</Col>





    <Col md="6" className="p-5" data-aos="fade-right"  data-aos-duration="2000">

    <h1 className="text-start">Why Choose Us?</h1>
  <p className="text-start">Our team spread across development, delivery and client management. We work professionally
     and we follow the method of software development life cycle process in our all project..</p>
  <div id="accordion">



 
  <div className="card-header text-start p-3">
        <a className="collapsed text-start" style={{textDecoration:"none"}} data-bs-toggle="collapse" href="#collapse1">
        <span className="text-start">High Quality Web Development Services</span>
        </a>
      </div>
      <div id="collapse1" className="collapse text-start" data-bs-parent="#accordion">
    
        We provide website development services that are on the cutting edge of today’s technologies.
         We offer responsive web design, web development, mobile app, ecommerce website, graphics design and seo services at a very affordable price

      </div>





<div className="card-header text-start p-3">
        <a className="collapsed text-start" style={{textDecoration:"none"}} data-bs-toggle="collapse" href="#collapse2">
        <span className="text-start">We Provide Cost Effective Solutions</span>
        </a>
      </div>
      <div id="collapse2" className="collapse text-start" data-bs-parent="#accordion">
        <div className="text-start">
        We Provide Cost Effective Solutions to our Clients. We offer website design and development services for all types of business and customize
it to fit your requirements.
        </div>
      </div>




<div className="card-header text-start p-3">
        <a className="collapsed text-start" style={{textDecoration:"none"}} data-bs-toggle="collapse" href="#collapse3">
        <span className="text-start">We have experienced professional team</span>
        </a>
      </div>
      <div id="collapse3" className="collapse text-start" data-bs-parent="#accordion">
     
 We have expert professional team who specialized in various technologies. Our team work dedicatedly to deliver innovative solutions. we always ensure that our client always takes benefits from us in terms of zero risk, Our Services will gives you value-for-money.
Here are some of the reasons we think you should consider working with Rainul Technologies.
      </div>





<div className="card-header text-start p-3">
        <a className="collapsed text-start" style={{textDecoration:"none"}} data-bs-toggle="collapse" href="#collapse4">
        <span className="text-start">Search engine friendly</span>
        </a>
      </div>
      <div id="collapse4" className="collapse text-start" data-bs-parent="#accordion">
        <div>
        We work actively with our associates and partners to provide the best SEO services. We offer affordable and effective SEO services around the globe.
        </div>
      </div>





<div className="card-header text-start p-3">
        <a className="collapsed text-start" style={{textDecoration:"none"}} data-bs-toggle="collapse" href="#collapse5">
        <span className="text-start">Excellent Technical Support</span>
        </a>
      </div>
      <div id="collapse5" className="collapse text-start" data-bs-parent="#accordion">
        <div>
        We provide tech support services to address your issues on call. Call us or submit your request online, we will get in touch with you.
        </div>
      </div>

  </div>

</Col>

 



</Row> 
</div>




  
    
   
       </>
    );
    return design;
    }
    export default About;
