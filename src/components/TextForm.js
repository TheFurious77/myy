import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
  //tconsole.log("Who Am I" + text);
  let newtext=text.toUpperCase();
  setText(newtext)
  props.showAlert("UpperCase has Been Converted","success")
  }
  const handleUpClear=()=>{
    let newtext="";
    setText(newtext)
    props.showAlert("Clear","success")
    }

  const handleOnChange = (event) =>{
   // console.log("On change");
    setText(event.target.value)
  }
  const [text,setText]=useState('');
  return (
    <>
      <div className='container' style={{color: props.mode==="dark"?"white":"#042743"}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
    <textarea className ="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#344cb8":"white",color:props.mode==="dark"?"white":"#042743"}} id="myBox" row="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleUpClear}>Clear</button>

    </div>
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743"}}>
      <h1>Word tracker</h1>
      <p> Words {text.split(" ").filter((element)=> {return element.length!==0}).length} character {text.length}</p>
      <p>Time required to read {text.split(" ").filter((element)=> {return element.length!==0}).length*4.8} seconds</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter The Text"}</p>
    </div>
    </>
  )
}
