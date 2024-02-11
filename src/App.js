
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Mynavvv from './Componentt/Homee/Mynavv/Mynavvv';
import Home from './Componentt/Homee/Home.jsx'
import Contact from './Componentt/pagess/Contact/Contact.jsx';
import Careers from './Componentt/pagess/Careers.jsx';
import WebDevelopment from  './Componentt/pagess/WebDevelopment.jsx';
import About from './Componentt/pagess/About/About.jsx';
import ResponsiveDesign from './Componentt/pagess/ResponsiveDesign.jsx';
import MobileApp from './Componentt/pagess/MobileApp.jsx';
import Graphics from './Componentt/pagess/Graphics.jsx';
import Seo from './Componentt/pagess/Seo.jsx';
import TwentySeven from './Componentt/pagess/TwentySeven.jsx';
import Footr from './Componentt/pagess/Footr/Footr.jsx';
import 'animate.css/animate.min.css';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Footrsld from './Componentt/Homee/Footrsld';



 

function App(){



  return (
   
     <div className='App'>

     
       <Router>
       <Mynavvv/>
       
       <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route exact path="/About" element={<About/>} />
       <Route exact path="/Contact" element={<Contact/>} />
       <Route exact path="/Careers" element={<Careers/>} />
       <Route exact path="/WebDevelopment" element={<WebDevelopment/>} />
       <Route exact path="/ResponsiveDesign" element={<ResponsiveDesign/>} />
       <Route exact path="/MobileApp" element={<MobileApp/>} />
       <Route exact path="/Graphics" element={<Graphics/>} />
       <Route exact path="/TwentySeven" element={<TwentySeven/>} />
       <Route exact path="/Seo" element={<Seo/>} />





       
       </Routes>
      
       <Footrsld/>
       <Footr/>
     </Router>
  

   </div>
  

  );
  }

  
export default App;