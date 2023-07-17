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


    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" placeholder='Enter text here' onChange={handleOnChange} value={text} ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
        </>
    );
}


