import React from 'react';
import { useState } from "react";


export default function TextForm(props) {

const [text, setText] = useState("");

const OnChangeHandler = (event)=>{
  setText(event.target.value)
}
const OnClickUpHandler = ()=>{
    let newText = text;
    setText(newText.toUpperCase());
    props.setMyAlert("Converted to Upper Case!","success");
}
const OnClickDownHandler = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.setMyAlert("Converted to Lower Case!","success");
}
const OnClickTitleHandler=()=>{
  let newText = TitleCase(text);
  setText(newText);
  props.setMyAlert("Converted to Title Case!","success");
}
const OnClickInverseHandler = ()=>{
    let newText = reverseString(text);
    setText(newText);
    props.setMyAlert("Text Inverted!","success");
}
const OnClickclearHandler=()=>{
    let newText = '';
    setText(newText);
    props.setMyAlert("All Text Cleared!","success");
}
const reverseString=(str)=>{
    let splitString = str.split("");
    let reverseStr = splitString.reverse();
    let newstr = reverseStr.join("");
    return newstr;
}
const TitleCase=(str1)=>{
    let toLcase = str1.toLowerCase();
    let splitTxt = toLcase.split(" ");
    for(var i=0; i < splitTxt.length;i++){
        splitTxt[i] = splitTxt[i].charAt(0).toUpperCase() + splitTxt[i].slice(1);
        }
        let joinTxt = splitTxt.join(" ");
        return joinTxt;
    }
    // const countWords=(s)=>{
    //     s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    //     s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    //     s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    //     return s.split(' ').filter(function(str){return str!="";}).length;
    //     //return s.split(' ').filter(String).length; - this can also be used
    // }
    
  

  return (
    <>
    <div mode ={props.mode}>
        <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={OnChangeHandler} id="MyBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={OnClickUpHandler}>Convert to UpperCase</button>
        <button className="btn btn-success mx-1" onClick={OnClickDownHandler}>Convert to lowerCase</button>
        <button className="btn btn-info mx-1" onClick={OnClickTitleHandler}>Convert to TitleCase</button>
        <button className="btn btn-danger mx-1" onClick={OnClickInverseHandler}>Reverse the Text</button>
        <button className="btn btn-dark mx-1" onClick={OnClickclearHandler}>Clear</button>

    </div>
    <div className="container my-3" mode ={props.mode} style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 >Your Text Summary</h2>
        <p>{text.trim().split(/\s+/).length} Words and {text.length}</p>
        {/* <p>{countWords(text)} Words and {text.length}</p> */}
       
        <h3>Preview..</h3>
        <p>{text}</p>
        
    </div>
    </>
  );
}
