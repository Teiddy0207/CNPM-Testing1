import React from 'react'

import ReactPlayer from 'react-player';

import takeoff5 from '../../assets/takeoff5.png'
import view from '../../assets/view.mp4'
import Navbar from '../NavBar/NavBar'
import Search from '../Search/Search';
import Support  from '../Support/Support';
import Travelers  from '../Travelers/Travelers';
import Footer  from '../Footer/Footer';

function Home() {
 
 
 return (
<>
<Navbar/>
  {/* <Home/> */}
  
    <div className='home flex container'>
      <div className="mainText">
        <h1>Mỗi chuyến bay là 1 kỷ niệm đáng nhớ</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={view} autoPlay muted loop className='view' ></video>
        </div>
        <img src={takeoff5} className='plane' />
      </div>
    </div>
    <Search/>
    <Support />
      <Travelers />
      <Footer/>
    </>
  )
 
}

export default Home