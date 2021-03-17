import React, {useState,useEffect} from 'react'
import SideBar from "./SideBar"
// import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import Home1 from '../assests/HOME PAGE  NEW 5  2020.jpg'
import Logo2 from '../assests/logo.PNG'
import BrandLogo from '../assests/brand-logo.PNG'
import { Container,Row,Col } from 'react-bootstrap'



function Project() {

    const [project, setProject] = useState();

    useEffect( () => {
        // axios
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res =>res.json()).then(data =>setProject(data))
    }, [])

  return (
    <div>
        {/* Home Page is Started */}
        <div className="homepage" >
            <div className="left-side">
                <SideBar></SideBar>
            </div>

            
            <section className="all-carusals mt-5" style={{padding:'0px',height:'100vh'}} id="project">
                <h2 className="logo-heading mb-2" style={{textAlign:'center',marginTop:'0px' }}> <img src={Logo2} alt=""/> </h2>
                <Container fluid className="magzine my-3">
                    
                    {
                        project  ? project .slice(0,1) .map(item =>{

                            return(
                                <Row className="mt-2" key={item.id} >
                                <Col md="4" sm className="pr-1">
                                <div className="sabon-style p-2" data-aos="fade-up" data-aos-delay="200">
                                        <h2 data-aos="fade-up">| {item.name} |</h2>
                                        <h2 data-aos="fade-up" style={{fontWeight:'200'}}>branding, package design,product design</h2>
                                        <img src={item.logo} alt="" width="150px" data-aos="fade-up" />
                                        <p data-aos="fade-up" style={{fontWeight:'200'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, adipisci!</p>
                                        <br/>
                                        <h2 data-aos="fade-up" style={{fontWeight:'300'}}>Project Description</h2>
                                        <p data-aos="fade-up" style={{fontWeight:'200'}}>{item.description}</p>
                                        {/* <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, molestiae?</p> */}
                                        <h2 data-aos="fade-up" style={{fontWeight:'300'}}>Design Process</h2>
                                        <p data-aos="fade-up"style={{fontWeight:'200'}} >{item.process}</p>
                                </div>
                            </Col>
        
                                <Col md="8" className="pl-0" sm data-aos="fade-up" data-aos-delay="200">
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={item.image1}
                                        height="400px"
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={item.image2}
                                        height="400px"
                                        alt="Second slide"
                                        />
        
                                    </Carousel.Item>
                                    {/* <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={Home1}
                                        alt="Third slide"
                                        />   
                                    </Carousel.Item> */}
                                </Carousel>
                            </Col>
                        
                            </Row>
                        
                            )

                        }):"Loading...."
                    }
                    
                    
                   
                
                
                </Container>
            
                {/* <Container fluid className="my-3">
                    <Row>
                        <Col md="6" sm className="mt-3" data-aos="fade-up" data-aos-delay="200">
                            <img src={Home2} width="100%" alt=""/>
                        </Col>
                        <Col md="6" sm className="mt-3" data-aos="fade-up" data-aos-delay="300"> 
                            <img src={Home5} width="100%" alt=""/>
                        </Col>
                        <Col md="6" sm className="mt-3" data-aos="fade-up" data-aos-delay="400"> 
                            <img src={Home3} width="100%" alt=""/>
                        </Col>
                        <Col md="6" sm className="mt-3" data-aos="fade-up" data-aos-delay="500"> 
                            <img src={Home4} width="100%" alt=""/>
                        </Col>
                    </Row>
                </Container> */}
            </section>
        

        </div>
    </div>
  );
}

export default Project;

