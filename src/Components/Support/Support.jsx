import React from 'react'


import peacful from '../../assets/peacful.jpg'
function Support() {
  return (
    <div className='support container section'>
<div className="sectionContainer">
  <div className="tittlesDiv">
    <small>travel support</small>
    <h2>Plan your traver confidence</h2>
    <p>Find help with booking and travel plans, see what to expect along
       the journey! </p>
  </div>

  <div className="inforDiv grid">
    <div className="textDiv grid">
      
      <div className="singleInfor">
            <span className='number colorOne'>01</span>
            <h4>travet requipment for dubai</h4>
            <p>
              find help witth booking travel plans, see what to expect along 
              the journey to your favourite destination!
            </p>
      </div>
      <div className="singleInfor">
            <span className='number colorOne'>02</span>
            <h4>travet requipment for dubai</h4>
            <p>
              find help witth booking travel plans, see what to expect along 
              the journey to your favourite destination!
            </p>
      </div>
      <div className="singleInfor">
            <span className='number colorTwo'>03</span>
            <h4>travet requipment for dubai</h4>
            <p>
              find help witth booking travel plans, see what to expect along 
              the journey to your favourite destination!
            </p>
      </div>
    
    </div>

    <div className="imgDiv grid">
<img src= {peacful} />
    </div>
  </div>
</div>
    </div>
  )
}

export default Support