import { Link } from 'react-router-dom';

import {
 
  Container,
  Row,
  Col,
  Card,
  Button

} from "react-bootstrap";
import Mysvg from '../Mysvg';



const Footr = ()=> {

const design=(
      <>
       
       <div className="container-fluid pt-5 mt-5 bg-dark">
  <Container>
      <Row>
      <Col md="4 text-start">

      <Link to="./">
<Mysvg/>
    </Link>


      <p className="text-white text-start mt-3" id="thin">
        We are web development company based in New Delhi
        that provide web-application designing and development
        and mobile apps.We are providing specialized services in
        website designing, website development, mobile application
         development for Android and IOS, graphics designing, seo 
         services, branding, Digital marketing and much more.
    </p>
         </Col>

         <Col sm="2" className="text-center">
    <h3 style={{color:"#FFA500"}}><u>Menu</u></h3>

    <div id="Footrid">
    <li>
      
        <Link  className="Footrlink" to="./">Home</Link>
     </li>
     
        <li style={{listStyleType:"none"}}>
        <Link  className="Footrlink" to="/About">About</Link>
        </li>  
        <li>
        <Link className="Footrlink" to="/Contact">Contact</Link>
        </li>
       
        <li>
        <Link className="Footrlink" to="/Careers">Careers</Link>
        </li> 
        </div>
    </Col>

    <Col sm="2" className="text-center">
    <h3 style={{color:"#FFA500"}}><u>Services</u></h3>
    <div id="Footrid">

    <li><Link className="Footrlink" to="/WebDevelopment">Web Development</Link> </li>
   
    <li><Link  className="Footrlink" to="/ResponsiveDesign">Responsive Design</Link> </li>
     

      <li><Link className="Footrlink" to="/MobileApp">Mobile App Development</Link> </li>
     
      <li><Link className="Footrlink" to="/Graphics">Graphics Design</Link> </li>
    
     <li><Link className="Footrlink" to="/Seo">SEO</Link> </li>
     
      <li>
      <Link className="Footrlink" to="/TwentySeven">24*7 Service</Link> </li>
  
</div>

    </Col>

    
    <Col md="4" className="text-center">
    <h3 style={{color:"#FFA500"}}><u>Company Address</u></h3>

    <div className="info">
              <div>
              
               <h5 className="text-white"> <i className="fas fa-map-marker-alt text-danger px-2"> </i>Address-1</h5>
                <p className="text-white" id="thin"> WZ-61A Street No-15,<br/>Sagarpur New Delhi, 110046</p>
                <h5 className="text-white"><i className="fas fa-map-marker-alt text-danger px-2"> </i>Address-2 </h5>
                <p className="text-white" id="thin"> Balikuchi, Loharkatha<br/>Nalbari Assam, 781126</p>
              </div>

              <div>
               
                < p className="text-white" id="thin"> <i className="far fa-envelope text-danger px-2"></i>support@rainultechnologies.com</p>
                </div>

              <div>
          
                <p className="text-white" id="thin"><i className="fa-solid fa-mobile-screen text-danger px-2"></i>(315) 905=5441 (United States)</p>
                <p className="text-white" id="thin"><i className="fa-solid fa-mobile-screen text-danger px-2"></i>971 671 9924 (India)</p>
              </div>

            </div>
       
          


    </Col>
      </Row>
      </Container>
     <Row>
       <Col sm>
<p className="text-white" id="thin">
Copyright © {new Date().getFullYear()} Rainul Technologies |Powered by Rainul Technologies</p>
     </Col>
     </Row>
    </div>
  
  

  </>


  );
  return design;
  }
  export default Footr;