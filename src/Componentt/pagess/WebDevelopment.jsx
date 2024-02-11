import {
  
   Container,
    Row,
    Col
    
   } from "react-bootstrap";

const Webdev = ()=> {
    const design=(
       <>


<div className="container-fluid p-0">
<Row>
  <Col lg="12">
<section className="jumbotron back-image" style={{backgroundImage:'url(Myimages/myimg4-min.jpg)'}}> 

 <div class="testing">
      <h1 className="text-uppercase text-center text-danger font-weight-bold">Web Development</h1>
      <p className="text-light">
      Your website is the first impression of your organization to users.

    
     </p>
     
    </div>
  </section>
  </Col>
  </Row>
 
  </div>

 
  <Container>
  <Row className="mt-5">
    <Col md="12" className="text-center">
      <h1 className="mt-5" data-aos="zoom-in" data-aos-duration="2000">Web Development</h1>
      </Col>
    </Row>

</Container>


<Container className="mt-5">
  <Row>
    <Col md="6" data-aos="fade-right"  data-aos-duration="2000">

  <p className="text-start">

  Web development is coding or programming that enables the functionality of a website. Web development can range from developing a simple single static page of plain text to complex web-based internet applications, electronic businesses, and social network services<br/><br/>

We provide website development services that are on the cutting edge of today’s technologies. Our Web developers are skilled in PHP, JAVA, .NET, AngularJS, NodeJS, HTML, CSS, JavaScript, Jquery, bootstrap<br/><br/>

Our developer has extensive experience in developing new and amazing websites that offer a variety of web development and web design services including customized, dynamic, Static, E-commerce, content management system, etc.<br/><br/>

Our professional team of website developers utilizes the latest tools and technologies in web development. This ensures your website will have no issues with speed or compatibility on any device your customer is using.
</p></Col>

 
<Col md="6" data-aos="fade-left" data-aos-duration="2000">

    <img  src="Myimages/webdev-min.jpg" width="1000" height="1000" className="img-fluid"/>
</Col>



</Row> 
</Container>

<Container>
  <Row>
    <Col md="12">
    <p className="text-start mt-2">
Your website is the first impression of your organization to users.
 We help our associates in developing their business by developing a web platform and cultivating
  a relationship with their users. The website developed by us serves as a perfect platform for your users to help them
   understand your organization’s cultures and values. We at work to provide a quality website that delivers value for each and every business.<br/><br/>
   </p>
   <p className="text-start">
   <strong>Our Web Development Services Includes:</strong><br/>
eCommerce Application Development<br/>
Web Application Development<br/>
CMS Application Development<br/>
Custom Website Development<br/>
24/7 Maintenance & Support<br/>

 </p>

 </Col>
 </Row>
 </Container>
     
   
       </>
    );
    return design;
    }
    export default Webdev;