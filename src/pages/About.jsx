import React from 'react'
import ReactDOM from 'react-dom'
import SideBar from "./SideBar"
import Carousel from 'react-bootstrap/Carousel'
import Home1 from '../assests/HOME PAGE  NEW 5  2020.jpg'
import Logo2 from '../assests/logo.PNG'
import { Container,Row,Col } from 'react-bootstrap'



function About() {
  return (
    <div>
        {/* Home Page is Started */}
        <div className="homepage" >
            <div className="left-side">
                <SideBar></SideBar>
            </div>

            
            <section className="all-carusals"  style={{marginTop:'20px',height:'100vh'}} id="about"  >
                <Container fluid className="about-section px-5">
                <h2 className="logo-heading" data-aos="fade-up" style={{float:'right'}}> <img src={Logo2} alt=""/> </h2>
                <br/>
                <br/>
                <br/>
                
                <Row style={{marginTop:'100px'}}>
                    <Col sm>
                        <div className="about-text text-justify" >
                            <h2 data-aos="fade-up">about: <span>Envisage-Concept Design Studio</span></h2>
                            <br/>
                            <p data-aos="fade-up">Dreams and vision are of course, compelety different. it is much like what it means. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, explicabo!lorem10
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque.
                            </p>
                            <br/>
                            <p style={{color:'#979797'}} data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores explicabo voluptatum accusamus. Excepturi, vitae consectetur cumque fugiat beatae ut!</p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className="about-text text-justify" >
                            <h2 data-aos="fade-up">I am Rayan Lev-Ari</h2>
                            <br/>
                            <p data-aos="fade-up">Dreams and vision are of course, compelety different. it is much like what it means. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, explicabo!lorem10
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque.
                            </p>
                            <br/>
                            <img src={Home1} width="100%" alt="" data-aos="fade-up"/>
                        </div>
                    </Col>
                    <Col sm>
                        <div className="about-text text-justify">
                            <h2 data-aos="fade-up">My Approach</h2>
                            <br/>
                            <p data-aos="fade-up">Dreams and vision are of course, compelety different. it is much like what it means. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, explicabo!lorem10
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque.
                            </p>
                            <br/>
                            
                        </div>
                    </Col>
                </Row>
                </Container>
            </section>
           


        </div>
    </div>
  );
}

export default About;

