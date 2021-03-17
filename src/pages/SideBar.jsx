import React, { useEffect,useState } from 'react'
import ReactDOM from 'react-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo2 from '../assests/logo.PNG'
import Logo3 from '../assests/mobile-logo.PNG'
// import {Link} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import $ from 'jquery'
// import onScroll from 'jquery'
import $target from 'jquery'
import SmoothScroll from 'smooth-scroll'



function SideBar() {

  // const gra = function(min, max) {
  //   return Math.random() * (max - min) + min;
  // };
  // const init = function() {
  //   let items = document.querySelectorAll("nav li");
  //   for (let i = 0; i < items.length; i++) {
  //     items[i].style.minHeight = gra(120, 205) + "vh";
  //   }
  
    
  // };
  // init();
  
    

    useEffect(() => {
        $(document).on('click','ul li', function(){
            $(this).addClass('active').siblings().removeClass('active')
        });
        
        
      
      }, []);

      const sections = document.querySelectorAll('section')
      const navli = document.querySelectorAll('nav ul li')

      window.addEventListener('scroll', ()=>{
        let current = ' ';
        // eslint-disable-next-line no-restricted-globals
        // console.log(pageYOffset)
        sections.forEach(section => {
          const sectionTop = section.offsetTop
          // console.log(sectionTop)
          const sectionHeight = section.clientHeight
          // eslint-disable-next-line no-restricted-globals
          if(pageYOffset > (sectionTop - sectionHeight /2)){
            current = section.getAttribute('id')
          }
          navli.forEach(li => {
            li.classList.remove('active')
            if(li.classList.contains(current)){
              li.classList.add('active')
            }
          })
        })
      })


    // smooth scrol
    var scroll = new SmoothScroll('.sidebar-left Link[to*="#"]');
      
   
  return (
    <div className="section">
        <nav className="side-bar-left" data-aos="fade-right" id="menu-center">
            <ul>
                <li className="home active"><Link smooth  to="#home" >Home</Link></li>
                <li className="about"><Link smooth to="#about" >About</Link></li>
                <li className="specility"><Link smooth to="#specility">Specialties</Link></li>
                <li className="project"><Link smooth to="#project">Projects</Link></li>
                <li className="magzine"><Link smooth to="#magzine">Journal</Link></li>
                <li className="contact"><Link smooth to="#contact">In Touch</Link></li>
            </ul>
            <span class="line" style={{transform: 'translate(0px, 125px) scaleY(1)', height: '125px',}}></span>
        </nav>

        {/* navbar bootstrap */}

        <div className="navbar-style mb-4 px-3">
            <Navbar  expand="lg">
                <Navbar.Brand to="/"><img src={Logo3} alt=""/></Navbar.Brand>
                <span style={{background:'#676163'}}><Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'#fff'}} /></span>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto mt-5 ml-5">
                      <Link className="nav-tab-1" smooth to="#home" style={{color:'#fff',fontSize:'30px',textTransform:'uppercase',letterSpacing:'1px',margin:'5px 0px'}}>Envisage</Link >
                      <Link className="nav-tab-1" smooth to="#about" style={{color:'#fff',fontSize:'30px',textTransform:'uppercase',letterSpacing:'1px',margin:'5px 0px'}} >About</Link >
                      <Link className="nav-tab-1" smooth to="#project" style={{color:'#fff',fontSize:'30px',textTransform:'uppercase',letterSpacing:'1px',margin:'5px 0px'}} >Projects</Link >
                      <Link className="nav-tab mt-5" smooth to="#specility" style={{color:'#fff',fontWeight:'200'}} ><span style={{fontSize:'25px'}}>S</span> pecialties</Link >
                      <Link className="nav-tab" smooth to="#magzine" style={{color:'#fff',fontWeight:'200'}}> <span style={{fontSize:'25px'}}>J</span> ournal</Link >
                      <Link className="nav-tab" smooth to="#contact" style={{color:'#fff',fontWeight:'200'}}> <span style={{fontSize:'25px'}}>I</span> n Touch</Link >
                    </Nav>
                  <br/>
                  <br/>
                  <br/>
                  <div className="float-right">
                    <a href="" style={{color:'#676163',fontSize:'20px'}}><i className="fa fa-instagram mr-2" style={{fontSize:'25px'}}></i>@envisage_studio</a>
                    <br/>
                    <a href="" style={{color:'#676163'}}><span className=" mr-4 " style={{fontSize:'28px'}}>f</span>envisage_studio</a>
                  </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
  );
}

export default SideBar;

