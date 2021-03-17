import React from 'react'
import ReactDOM from 'react-dom'
import SideBar from "./SideBar"
import Carousel from 'react-bootstrap/Carousel'
import Logo2 from '../assests/logo.PNG'
import Mag2 from '../assests/magzine-1.PNG'
import Mag3 from '../assests/magzine-2.PNG'
import Home1 from '../assests/HOME PAGE  NEW 5  2020.jpg'
import { Container,Row,Col } from 'react-bootstrap'



function Magzine() {
  return (
    <div>
        {/* Home Page is Started */}
        <div className="homepage" >
            <div className="left-side">
                <SideBar></SideBar>
            </div>
            
            <section className="all-carusals mt-5" style={{padding:'0px'}} id="magzine">
                <Container fluid className="magzine">
                    <Row>
                        <Col className="magzine_left" sm data-aos="fade-up">
                            {/* <img src={Home1} width="100%" alt=""/> */}
                        </Col>
                        <Col>
                            <h2 className="logo-heading" data-aos="fade-up"><img src={Logo2} alt=""/></h2>
                            <Row>
                                <Col className="my-3">
                                    <div className="img" data-aos="fade-up">
                                        <img src={Mag2} width="100%" alt=""/>
                                    </div>
                                    <div className="img-text" data-aos="fade-up">
                                        <h2>Mizzi Studio</h2>
                                        <h4>SYFY Design</h4>
                                        <p style={{fontWeight:'200'}}>In An age Where we Both Want To Catch Up with and Invalidate The Trends</p>
                                    </div>
                                    <br/>
                                    <div className="img" data-aos="fade-up">
                                        <img src={Mag3} width="100%" height="300px" alt=""/>
                                    </div>
                                    <div className="img-text" data-aos="fade-up">
                                        <h2>Mizzi Studio</h2>
                                        <h4>SYFY Design</h4>
                                        <p style={{fontWeight:'200'}}>In An age Where we Both Want To Catch Up with and Invalidate The Trends</p>
                                    </div>
                                    <br/>
                                </Col>
                                <Col className="my-3"> 
                                        <div className="img" data-aos="fade-up">
                                            <img src={Mag3} width="100%" height="300px" alt=""/>
                                        </div>
                                        <div className="img-text" data-aos="fade-up">
                                            <h2>Mizzi Studio</h2>
                                            <h4>SYFY Design</h4>
                                            <p style={{fontWeight:'200'}}>In An age Where we Both Want To Catch Up with and Invalidate The Trends</p>
                                         </div>
                                    <br/>
                                    <div className="img" data-aos="fade-up">
                                        <img src={Mag2} width="100%" alt=""/>
                                    </div>
                                    <div className="img-text" data-aos="fade-up">
                                        <h2>Mizzi Studio</h2>
                                        <h4>SYFY Design</h4>
                                        <p style={{fontWeight:'200'}}>In An age Where we Both Want To Catch Up with and Invalidate The Trends</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section> 
        </div>
    </div>
  );
}

export default Magzine;

