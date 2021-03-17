import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom"
import "aos/dist/aos.css"
import './index.css';
import App from './App';
import fullpage from 'fullpage.js'


new fullpage('#fullpage', {
  //options here
  // autoScrolling:true,
  // scrollHorizontally: true
});

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  document.getElementById('root')
);


