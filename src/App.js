import React, { useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Magzine from './pages/Magzine'
import About from './pages/About'
import Contact from './pages/Contact'
import Home2 from './pages/Home2'
import Home2Clone from './pages/Home2Clone'
import Project from './pages/Project'
import Specility from './pages/Specility'
import Error from './pages/Error'
import Aos from 'aos'
import fullpage from 'fullpage.js'
import ReactFullpage from '@fullpage/react-fullpage';


function App() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);


  new fullpage('#fullpage', {
    //options here
    // autoScrolling:true,
    // scrollHorizontally: true
  });
  return (
    <>
    <div className="container-1" id="full-page">
        {/* <Switch/> */}
        <Home2/>
        {/* <Home/> */}
        <About/>
        <Specility/>
        <Project/>
        <Magzine/>
        <Contact/>
        
    
          {/* <Route exact path="/" component={Home} />
          <Route exact  path="/magzine" component={Magzine} />
          <Route exact  path="/about" component={About} />
          <Route exact  path="/contact" component={Contact} />
          <Route exact  path="/home2" component={Home2} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/magzine" component={Magzine} />
          <Route exact path="/specility" component={Specility} /> */}
          {/* <Route   component={Error} /> */}
    </div>
    {/* <div className="is-clone">
    <Home2Clone/>
    </div> */}
    </>
  );
}

export default App;
