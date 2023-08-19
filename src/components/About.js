import React, { useState } from 'react'

export default function About(props) {
  //const [myStyle,setMystyle]=useState({
    // color : "black",
    // backgroundColor: "white"
  //})

  let myStyle={
    color:props.mode==="light"?"#042743":"white",
    backgroundColor:props.mode==="light"?"white":"#1f5e90"
  }
  return (
    <>
    <div className="container" >
    <h1 className='my-2' style={{color:props.mode==="light"?"#042743":"white"}}>About Us</h1>
    <div className="accordion" id="accordionExample" >
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne" >
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        it is what it is
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Me is mary curie
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        U still Didn't Get it
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Hidden truth of life
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        ONE DAY I WILL KNOW
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Is it matrix
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
