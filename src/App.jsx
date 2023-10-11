import React, { useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Redirect, Link } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import "./main.css"
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Support from './Components/Support/Support'
import Travelers from './Components/Travelers/Travelers'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';




//   return (
//     <div>
//       <NavBar />
//       <Home />
//       <Search />
//       <Support />
//       <Travelers />
//       <Footer />
//       <Register/>
//       <Login/>

//     </div>
//   )
// }

const App = () => {
   const handleLogin = () => {
      console.log('User logged in');
    };
  return (
     
     <div>
     <BrowserRouter>
     <Routes>
        <Route path ='/login' element = {<Login onLogin={handleLogin}/>}></Route>
         <Route path ='/' element ={<Home/>}></Route>
         <Route path = '/register' element ={<Register/>}></Route>
     </Routes>
      </BrowserRouter>
      </div>
  
  );
}


export default App;