import React, { useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import "./main.css"
import App from './../src/App';





const MainApp = () => {

  return (
     
     <div>
   
   
   {/* <App/> */}
   <BrowserRouter>
     <Routes>
        <Route path ='/login' element = {<Login/>}></Route>
     </Routes>
     <Routes>
        <Route path ='/footer' element = {<Footer/>}></Route>
     </Routes>
      
  
      </BrowserRouter>
     
      </div>
  
  );
}


export default MainApp;