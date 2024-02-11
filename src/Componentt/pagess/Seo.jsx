import {
  
   Container,
    Row,
    Col
    
   } from "react-bootstrap";

const Seooo = ()=> {
    const design=(
       <>


<div className="container-fluid p-0">
<Row>
  <Col lg="12">
<section className="jumbotron back-image" style={{backgroundImage:'url(Myimages/myimg4-min.jpg)'}}>

 <div class="testing">
      <h1 className="text-uppercase text-center text-danger font-weight-bold">Seo Services</h1>
      <p className="text-light">Search Engine Optimization (SEO) is the process of increasing the quality and quantity of website traffic, and increasing the visibility of a website or a web page to users of a web search engine.</p>
     
    </div>
  </section>
  </Col>
  </Row>
 
  </div>

   
  <Container>
  <Row className="mt-5">
    <Col md="12" className="text-center">
      <h1 className="mt-5" data-aos="zoom-in" data-aos-duration="2000">Seo Services</h1>
      </Col>
    </Row>

</Container>


<Container className="mt-5">
  <Row>
    <Col md="6" data-aos="fade-right"  data-aos-duration="2000">

  <p className="text-start">
  Search engine optimization (SEO) is the process of increasing the quality and quantity of website traffic by increasing the visibility
   of a website or a web page to users of a web search engine.<br/><br/>

We work actively with our associates and partners to provide the best SEO services. We offer affordable
 and effective SEO services around the globe. Our purpose is to help companies improve their online presence
  in search and social media in order to acquire new customers and build their brand online.<br/><br/>

We believe in strategic planning to get your website ranked on the first page of the search engine result 
page with the relevant niche. We provide business-oriented services for enhancing the online traffic to your website.<br/><br/>


OUR SERVICES: Optimizing and creating local citations (Local SEO), Optimizing website content and code, Measurement and analytics reporting, Creating new website content and creatives, Tracking and tweaking SEO campaign, Blog Content Creation, Onsite SEO Edits, Social Bookmarking & Linking, Social Media Content Scheduling, Social Media Content Curation & Approval, On-Page Optimization

 </p>
</Col>

 
<Col md="6" data-aos="fade-left" data-aos-duration="2000">

    <img  src="Myimages/seo-min.jpg" width="1000" height="1000" className="img-fluid"/>
</Col>



</Row> 
</Container>
      
     
   
       </>
    );
    return design;
    }
    export default Seooo;