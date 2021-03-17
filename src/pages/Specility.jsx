import React from 'react'
import SideBar from "./SideBar"
import { Container,Row,Col } from 'react-bootstrap'



function Specility() {
  return (
    <div>
        {/* Home Page is Started */}
        <div className="homepage" >
            <div className="left-side">
                <SideBar></SideBar>
            </div>

            
                 <section className="all-carusals" style={{padding:'0px'}} id="specility" >
                <Container fluid >
                    <Row>
                        <Col md="3" xs="6" className="p-0" data-aos="fade-up">
                            <div className="specialy-component white-mode ">
                                    <div className="text-left">
                                        <h2>Branding |</h2>
                                        <p>Conseptual Branding</p>
                                        <p>Concept Branding</p>
                                        
                                    </div>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="botom-white">

                                    </div>
                            </div>
                        </Col>
                        <Col md="3" xs="6" className="p-0">
                        <div className="specialy-component dark-mode text-white">
                                    <div className="text-left">
                                        <h2>Product Design |</h2>
                                        <p>Package Design</p>
                                        <p>Furniture Design</p>
                                        <p>idea Creation and Trends</p>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="text-left ml-4" style={{color:'#C8AD96'}}>
                                        <h2>Our Process</h2>
                                        <p>is to nature any Nugget <br/> or Seeding You May </p>
                                    </div>
                                    <div className="botom-dark">
                                        
                                    </div>
                            </div>
                        </Col>
                        <Col md="3" xs="6" md={{ order: 1 }} xs={{ order: 12 }} className="p-0"> 
                            <div className="specialy-component white-mode " data-aos="fade-up">
                                    <div className="text-left pl-4">
                                        <h2>Interior Design |</h2>
                                        <p>Restaurant</p>
                                        <p>Coffe Shop</p>
                                        <p>Store</p>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="text-justify ml-4 " style={{color:'#C8AD96'}}>
                                        <p>Lorem ipsum, dolor sit amet <br/> consectetur adipisicing elit. <br/> Obcaecati molestiae voluptatibus <br/> cupiditate, possimus numquam debitis!</p>
                                    </div>

                                    <div className="botom-white">
                                        
                                    </div>
                            </div>
                        </Col>
                        <Col md="3" xs="6" xs={{ order: 1 }} className="p-0">
                            <div className="specialy-component dark-mode text-white">
                                    <div className="text-left">
                                        <h2>UI UX |</h2>
                                        <p>Apps</p>
                                        <p>Web site</p>
                                        
                                    </div>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="botom-dark">
                                        
                                    </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            
            </section>
        

        </div>
    </div>
  );
}

export default Specility;

