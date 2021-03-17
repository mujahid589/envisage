import React from 'react'
import ReactDOM from 'react-dom'
import SideBar from "./SideBar"
import Carousel from 'react-bootstrap/Carousel'
import Home1 from '../assests/HOME PAGE  NEW 5  2020.jpg'
import Home2 from '../assests/HOME PAGE  NEW 4  2020.jpg'
import Home3 from '../assests/bottel.PNG'
import Home4 from '../assests/HOME PAGE  NEW 2  2020.jpg'
import Logo2 from '../assests/logo.PNG'
// import Home5 from '../assests/HOME PAGE  NEW   2020.jpg'
import { Container,Row,Col } from 'react-bootstrap'


function Home() {
  return (
    <div>
        {/* Home Page is Started */}
        <div className="homepage" >
            <div className="left-side" data-aos="fade-right">
                <SideBar></SideBar>
            </div>
            <section className="all-carusals" data-aos="fade-up" style={{padding:'0px'}}  >
                    <h2  className="logo-heading my-5" data-aos="fade-up" style={{textAlign:'center'}}> <img src={Logo2} alt=""/> </h2>
            
                {/* home page  */}
                <Container fluid>
                    <Row>
                        <Col md={4} className="mt-4" sm>
                            <img src={Home1} width="100%" height="400px" alt=""/>
                        </Col>
                        <Col md={3} className="mt-4" sm>
                            <img src={Home2} width="100%"   height="190px" alt=""/>
                            
                            <img src={Home2} width="100%"  height="190px" className="mt-4" alt=""/>
                        </Col>
                        <Col md={2} className="mt-4" sm>
                            <img src={Home3} width="100%" height="400px"  alt=""/>

                        </Col>
                        <Col md={3} className="mt-4" sm>
                            <img src={Home4} width="100%" height="400px" alt=""/>
                        </Col>
                    </Row>
                </Container>
            
            </section>
        </div>
    </div>
  );
}

export default Home;

