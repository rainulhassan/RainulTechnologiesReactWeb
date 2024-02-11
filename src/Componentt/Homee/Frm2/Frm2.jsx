import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Frm2.css';

import {
 
  Container,
  Row,
  Form,
  Col,
  Button,
  Card

} from "react-bootstrap";


const Result =() =>{
  return(
    <p className="text-success mt-2">Your form submitted successfully, We will contact you shortly</p>
  );
};

const Frm2 = () => {
  const [result,showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a89uive', 'template_a7sosfk', e.target, 'y_5uvy7kiFy5iyh-S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };
  setTimeout(() =>{
    showResult(false)
  }, 5000);
 
  return (
    <>
  
<Container className="mt-5">
<Card className="card shadow p-3 mb-5 bg-white rounded">
 <Card.Body>
<Row>


<Col lg="12" className="text-center">

<h1 className="mt-5" data-aos="zoom-in" data-aos-duration="2000">Let's Get In Touch</h1>
<div className="divider"></div>
              <p data-aos="zoom-in-up" data-aos-duration="2000">
              If you’re looking for a brand-new website and Mobile App OR want to redesign your old website and Mobile App
then contact us today and request a quote. We would be happy to assist you.
                </p>
         </Col>
      </Row>
  

   
 
   
   <Row className="mt-5 mb-5">
  
     <Col md="6 mt-3"  data-aos="fade-right"
      data-aos-duration="2000"
     data-aos-easing="ease-in-sine">
  
    <Form action="" onSubmit={sendEmail}  autoComplete="off">


 <Form.Group className="mb-3" controlId="formBasicEmail">
 <Form.Control  minLength="4" maxLength="20" title="Please enter minimum 4 character"  placeholder="Enter your name" type="text" name="fullname" required/>
     </Form.Group>
     
     <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Control   placeholder="Enter your email id" type="email" name="email" required/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Control  maxLength="14" pattern="\d{10}" placeholder="Enter your phone Number" type="phone" name="phone" required/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<textarea  className="form-control" rows="5" minLength="10" maxLength="200" placeholder="Please write something" name="message" required></textarea>
 </Form.Group>

      <Button id="submitbutton"  type="submit">Submit</Button>
<div className="row">{
  result ? <Result/> : null}
</div>
    </Form>
  
    </Col>



    <Col md="6 mt-3" data-aos="fade-left" data-aos-easing="ease-in-sine"
  
     data-aos-duration="2000">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.2331716062648!2d91.4217527292372!3d26.296282101283136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a31be3c327ab9%3A0x9a7fc2deea71ff39!2sRainul%20Technologies!5e0!3m2!1sen!2sin!4v1675180222292!5m2!1sen!2sin" width="100%" height="550" frameBorder="0"  style={{border:"0"}} allowFullScreen=""></iframe>

 </Col>

 

    </Row>
    </Card.Body>
    </Card>
    </Container>
 
    
   
    </>
 
  );
};

export default Frm2;
