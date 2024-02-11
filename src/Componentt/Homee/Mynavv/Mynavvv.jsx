import './mynavvv.css';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Navbar,
  Container,
  NavDropdown,
  Nav
} from "react-bootstrap";
import {useState} from "react"
import Mysvg from '../../pagess/Mysvg';



const Mynavvv = ()=> {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);




    const design=(
      <>
       
       <Navbar className="justify-content-center" expand="lg" id="HMnav" fixed="top" style={{ transition: '1s ease',backgroundColor: colorChange ? '#212529' : 'transparent'}}>
       <Container>
  <Link className="navbar-brand" to="./">
  <Mysvg/>
    </Link>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="ms-auto">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" to="./">Home</Link>
        
        </li>

        <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
        </li>  

        <li className="nav-item">
        <Link className="nav-link" to="/Contact">Contact</Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link" to="/Careers">Careers</Link>
        </li>
       
        
        <li className="nav-item dropdown">
        <Link  className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Services</Link>
          <ul className="dropdown-menu">



            <li><Link className="nav-link" to="/WebDevelopment">Web Development</Link> </li>
            <li><Link className="nav-link" to="/ResponsiveDesign">Responsive Design</Link> </li>
            <li><Link className="nav-link" to="/MobileApp">Mobile App Development</Link> </li>
            <li><Link className="nav-link" to="/Graphics">Graphics Design</Link> </li>
            <li><Link className="nav-link" to="/Seo">SEO</Link> </li>
            <li><Link className="nav-link" to="/TwentySeven">24*7 Support</Link> </li> 




              
              
           
      
   



          </ul>
        </li>
      </ul>
    </Nav>
      </Navbar.Collapse>
    </Container>
  

</Navbar>

  </>





  );
  return design;
  }
  export default Mynavvv;