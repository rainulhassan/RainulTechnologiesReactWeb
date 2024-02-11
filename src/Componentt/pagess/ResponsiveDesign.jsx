import {
  
   Container,
    Row,
    Col
    
   } from "react-bootstrap";

const Responsv = ()=> {
    const design=(
       <>


<div className="container-fluid p-0">
<Row>
  <Col lg="12">
<section className="jumbotron back-image" style={{backgroundImage:'url(Myimages/myimg4-min.jpg)'}}>

 <div class="testing">
      <h1 className="text-uppercase text-center text-danger font-weight-bold">Responsive Design</h1>
     <p className="text-white">Web design refers to the design of websites that are displayed on the internet it is the process of creating interactive websites that will enhance the online presence of your business and brand.</p>
    </div>
  </section>
  </Col>
  </Row>
 
  </div>

   
  <Container>
  <Row className="mt-5">
    <Col md="12" className="text-center">
      <h1 className="mt-5" data-aos="zoom-in" data-aos-duration="2000">Responsive Design</h1>
      </Col>
    </Row>

</Container>


<Container className="mt-5">
  <Row>
    <Col md="6" data-aos="fade-right"  data-aos-duration="2000">

    <p className="text-start">

  Web design refers to the design of websites that are displayed on the internet it is the process of creating interactive websites
   that will enhance the online presence of your business and brand.<br/><br/>

We design and create web pages that are easily navigable on screens of any size and device. Web page texts, fonts, widths, colors, links, graphics, and videos all adjust automatically to fit the size and shape of whatever screen it is viewed on from a large screen to a small phone screen.
We offer rapid web design services at a very affordable price. We understand your needs and tasks and we value your time and
 money hence we make sure that we provide you services at the most affordable prices with a commitment to on-time delivery.<br/><br/>

Our website designing service can give you a significant edge by helping your potential customers to find and browse your website more easily.<br/><br/>

</p>
 </Col>

 
<Col md="6" data-aos="fade-left" data-aos-duration="2000">

    <img  src="Myimages/ra13-min.jpg" width="1000" height="1000" className="img-fluid"/>
</Col>

</Row> 
</Container>
<Container>
  <Row>
  <Col md="12">
<p className="text-start mt-3">
More than 90% of your website visitor or follower are now using mobile and tablets. Our team develops fully responsive websites with an intelligent
 user interface that adapts to varied screen resolutions and delivers an amazing user experience regardless of the device and browsing environment.<br/><br/>

We are creative and innovative in web design, and development and our primary focus is to add new features that can lay down to ensure success
 for your online business. Our creative designing team spends time understanding your business objectives & target niche before starting the designing process.<br/><br/>

Your website is the most important component of your marketing strategy. It serves as the hub of all of your online activity. We design websites
 that help you generate the most conversions. We do this by delivering an attractive design, responsive theme, and user-friendly website.</p>

 <br/>
 
 <p className="text-start">
If you’re looking for a brand-new website and want to redesign your old website then we are the one to help you.<br/>
<strong>Our Web Design Services Include:</strong><br/>
Logo Design<br/>
CSS Web Design<br/>
Responsive Websites<br/>
Designing of Web Pages<br/>
PSD to HTML/XHTML Conversion<br/>
CMS Web Design

 </p>
 </Col>
 </Row>
 </Container>
      
     
   
       </>
    );
    return design;
    }
    export default Responsv;