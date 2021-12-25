import React, { useState } from 'react';

export default function Textform(props) {
    const handleUpclick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","sucess")
    }

    const handleLoclick = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","sucess")
    }

    const handlereverseclick = () => {
        // console.log("reverse was clicked" + text);
        let spl = text.split(" ")
        let rev = spl.reverse();
        let join = rev.join(" ");
        setText(join)
        props.showAlert("Text is Reverse","sucess")
    }   

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="conatiner" style={{color:  props.mode==='dark'?'white':'#2d2a3f' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} style={{backgroundColor:  props.mode==='dark'?'#2d2a3f':'white',color:props.mode==='dark'?'white':'#2d2a3f' }} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpclick} >Convet to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoclick} >Convet to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handlereverseclick} >Reverse Case</button>
            </div>
            <div className="container my-3" style={{color:  props.mode==='dark'?'white':'#2d2a3f' }}>
                <h2>Your text Sumary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2>Minutes to Read</h2>
                <p>{0.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>


        </>


    )
}
