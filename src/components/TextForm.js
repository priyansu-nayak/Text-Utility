//Video #7
/*
import React,{ useState } from 'react'


export default function TextForm(props) {
    const [text,setText] = useState('');
    
    const handleOnChange =(event)=>{
        console.log("handleOnChange clicked!");
        setText(event.target.value);    
    }
    
    const handleUpClick = ()=>{
        console.log("UpperCase clicked!");
        setText(text.toUpperCase());
    }

    const handleLoClick =()=>{
        console.log("lowercase clicked!");
        setText(text.toLowerCase());
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" placeholder='Enter text here' onChange={handleOnChange} value={text} ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>LowerCase</button>
        </>
    );
}


*/

// Video #8

import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        
        setText(event.target.value);
        console.log(text.split(" "));
    }

    const handleUpClick = () => {
        
        setText(text.toUpperCase());
    }

    const handleLoClick = () => {
        
        setText(text.toLowerCase());
    }

    const handleClear = ()=>{
        setText('');
    }
    const handleCopy=()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" placeholder='Enter text here' onChange={handleOnChange} value={text} ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

            </div>

            <div className="container my-3">
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p className="text-wrap">
                     {text}
                </p>
            </div>
        </>
    );
}


