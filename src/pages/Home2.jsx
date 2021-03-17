import React from 'react'
import ReactDOM from 'react-dom'
import SideBar from "./SideBar"
import {HashLink as Link} from 'react-router-hash-link'
import Carousel from 'react-bootstrap/Carousel'
import Home1 from '../assests/HOME PAGE  NEW 5  2020.jpg'
import Alpha from '../assests/alpha.PNG'
import Line from '../assests/home-line.PNG'
import Logo2 from '../assests/logo.PNG'
// import Line2 from '../assests/line-2.PNG'
import { Container,Row,Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Home2() {
  return (
    <div>
        {/* Home Page is Started */}
        <div className="homepage">
            <div className="left-side">
                <SideBar></SideBar>
            </div>

            <section className="all-carusals" style={{padding:'0px'}} id="home">
                <div className="home_2">
                    <Container fluid className="">
                        <Row className="pt-5">
                            <Col xs={6} md={5}></Col>
                            <Col className="p-0" xs={12} md={3}>
                                <div className="award-wining-left mt-5  px-3">
                                    <br/>
                                    <br/>
                                    <h2 data-aos="fade-up">We ARE <span data-aos="fade-up">An <br/> Award Wining <br/> Consept Design <br/></span></h2>
                                    <h2  data-aos="fade-up" className="text-right mr-4"><span data-aos="fade-up">Agency</span></h2>
                                    <br/>
                                    {/* <img src={Line2} className="float-right" alt=""/> */}
                                </div>
                                <div className="get-in mt-0">
                                    {/* <p data-aos="fade-up">Lets Get In touch</p> */}
                                    <Link smooth to="#contact" style={{color:'#222'}}>Lets get In Touch</Link>
                                </div>
                            </Col>
                            <Col className="p-0" xs={12} md={4}>
                                <div className="award-wining-right m-0">
                                <h2 className="logo-heading" style={{textAlign:'right',marginRight:'90px'}} data-aos="fade-up"><img src={Logo2} alt=""/></h2>
                                <div className="awrd-text  text-justify" style={{paddingTop:'20px',paddingBottom:'20px',paddingLeft:'40px',paddingRight:'100px',}}>
                                    <p data-aos="fade-up" className="home-2">With a Holistic Approch Specilization in Creating a Visual Voice For Premium Brands</p>
                                    <p data-aos="fade-up">With a Holistic Approch Specilization in Creating a Visual Voice For Premium Brands</p>
                                    <p data-aos="fade-up">With a Holistic Approch Specilization in Creating a Visual Voice Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, veritatis! For Premium Brands</p>
                                    <p data-aos="fade-up">With a Holistic Approch Specilization in Creating a Visual Voice For Premium Brands</p>
                                </div>
                                </div>
                                <br/>
                                <br/>
                                <p className="text-center"><img src={Line} alt=""/></p>


                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
       
            </div>
    </div>
  );
}

export default Home2;

