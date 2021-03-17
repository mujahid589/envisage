import React from 'react'
import ReactDOM from 'react-dom'
import SideBar from "./SideBar"
import Carousel from 'react-bootstrap/Carousel'
import Home1 from '../assests/HOME PAGE  NEW 5  2020.jpg'
import Alpha from '../assests/alpha.PNG'
import Logo2 from '../assests/logo.PNG'
import { Container,Row,Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Contact() {
  return (
    <div>
        {/* Home Page is Started */}
        <div className="homepage" >
            <div className="left-side">
                <SideBar></SideBar>
            </div>

           
            <section className="all-carusals"  style={{padding:'0px'}} id="contact" >
                <Container fluid className="about-section ">
                   <Row>
                       <Col className="text-center contact-left-side p-5">
                                <h4 data-aos="fade-up">Tell us What on your mind</h4>
                                <p data-aos="fade-up">052-940-940-1</p>
                                <br/>
                                <div className="contact-info">
                                    <p data-aos="fade-up">9 Ahad Haam st.Tel-Aviv</p>
                                    <p data-aos="fade-up">RYAN@ENVISAGE.STUDIO</p>
                                </div>
                                <br/>
                                <div className="contact-form">
                                    <Form>
                                        <Form.Group controlId="formBasicEmail" data-aos="fade-up" className="w-50 mx-auto contact-input">
                                            <Form.Control type="text" placeholder="Your Name" className="input" />
                                            <hr/>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword" data-aos="fade-up" className="w-50 mx-auto contact-input">
                                            <Form.Control type="email" placeholder="Your Email" className="input" />
                                            <hr/>
                                        </Form.Group>
                                        
                                        <Form.Group controlId="formBasicPassword" data-aos="fade-up" className="w-50 mx-auto contact-input">          
                                            <Form.Control type="text" placeholder="Your Phone" className="input" />
                                            <hr/>
                                        </Form.Group>
                                        
                                       <div className="button-style ml-5">
                                            <Button variant="primary" type="submit" data-aos="fade-up" className="btn-1">
                                                    sub  <br/> mit
                                            </Button>
                                       </div>
                                    </Form>
                                </div>
                       </Col>
                       <Col className=" contact-right-side p-5">
                       <h2 className="logo-heading mb-5" style={{float:'right'}}> <img src={Logo2} alt=""/> </h2>
                        <br/>
                            <div className="text-right-side ">
                                <h2 data-aos="fade-up">We Will</h2>
                                <h5 data-aos="fade-up" style={{fontWeight:'200',fontSize:'40px'}}>be Happy</h5>
                                <p data-aos="fade-up" style={{fontWeight:'200',fontSize:'20px'}}>to work with you listen plan</p>
                                <h4 data-aos="fade-up" style={{fontWeight:'200',fontSize:'30px'}}>purpose solution</h4>

                                <br/>
                                <div className="d-flex" data-aos="fade-up">
                                    <img src={Alpha} alt=""className="mr-2" />
                                    <p style={{fontWeight:'250',fontSize:'17px'}}>
                                        Ultimate To Ensure
                                        <br/>
                                        The Very Root Of your
                                        <br/>
                                        Brand is felt by Each
                                        <br/>
                                        consumer.
                                    </p>
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

export default Contact;

