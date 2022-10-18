import React, {useState} from 'react'

export default function TestForm(props) {
    const [text, setText] = useState('');
    //text="new Text"; //wrong way to change the state
    //setText="newText";  //correct way to change the state
    const handleUpperClick=()=>{
        //console.log("uppercase clicked")
        let newText = text.toUpperCase();
        setText(newText)
        //props.showAlert("converted to uppercase", "success");
    }

    const handleLowerClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        //props.showAlert("converted to lowercase", "success");
    }

    const handleClearClick=()=>{
        let newText = "";
        setText(newText)
        //props.showAlert("cleared all the text", "success");
    }

    const handleCopyClick=()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        //props.showAlert("copied to clipboard", "success");
    }

    const handleOnchange=(event)=>{
        setText(event.target.value)
    }
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'black': 'black'}} placeholder="Enter Text Here" onChange={handleOnchange} value={text} className="form-control" id="mybox" rows="8"></textarea>
                </div>
                <button className='btn btn-dark mx-2' onClick={handleUpperClick}>Convert to Uppercase</button>
                <button className='btn btn-dark mx-2' onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className='btn btn-dark mx-2' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-dark mx-2' onClick={handleCopyClick}>Copy Text</button>
            </div>
            <div className='container  my-3'>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words & {text.length} characters</p>
                <p>Average time taken to read this is {text.split(" ").length * 0.008} min</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
            </div>
        </>
    )
}