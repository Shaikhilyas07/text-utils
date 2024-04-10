import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('')
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert('Converted to Upper case', "success")
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert('Converted to Lower case', "success")

    }
    const handleClearClick = () => {
        let newtext = '';
        setText(newtext)
        props.showAlert('Text got Cleared', "success")

    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Removed extra spaces', "success")

    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleCopy = (e) => {
        var test = document.getElementById('myBox')
        test.select();
        navigator.clipboard.writeText(test.value)
        props.showAlert('Text Copied', "success")

    }

    return (
        <>
            <div style={{color:props.mode==='dark'?'white':'#042743'}} className='container'>
                <h1  >{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} value={text} className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <button onClick={handleLoClick} className="btn btn-primary mx-2 my-1">Convert to Lowercase</button>
                <button onClick={handleUpClick} className="btn btn-primary mx-2 my-1">Convert to Uppercase</button>
                <button onClick={handleCopy} className="btn btn-primary mx-2 my-1">Copy Text</button>
                <button onClick={handleClearClick} className="btn btn-primary mx-2 my-1">Clear Text</button>
                <button onClick={handleExtraSpace} className="btn btn-primary mx-2 my-1">Remove Spaces</button>
            </div>
            <div style={{color:props.mode==='dark'?'white':'#042743'}} className="container my-2">
                <h1>Your text summary</h1>
                <p>{ text.split(" ").filter((e) => e.length!==0).length} words and {text.length} characters</p>
                <p>{ 0.008 *  text.split(" ").filter((e) => e.length!==0).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text : "Enter something in the textbox to preview"}</p>
            </div>
        </>

    )
}

export default TextForm
