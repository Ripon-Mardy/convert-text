import React, {useState} from 'react'

export default function MainApp() {

    const clickEvent = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const clickLowEvent = () => {
      let lowText = text.toLowerCase();
      setText(lowText)
    }

    const changeEvent = (e) => {
        setText(e.target.value)
    }

    const valueOfText = () => {
    }

    const clickToCopy = () => {
      let textCopy = document.querySelector("#textValue"); 
      textCopy.select();
      navigator.clipboard.writeText(textCopy.value)

    }

    const clearText = () => {
      let textEmpty = "";
      setText(textEmpty)
    }


    const [text, setText] = useState("")
  return (
    <>
      <div className="container">
        <div className="main-container">
        <h3>convert your text</h3>
        <div className='mb-3'>
        <textarea className='form-control' cols="6" rows="5" value={text} onChange={changeEvent} placeholder='Type your text for convert'></textarea>
        </div>
        <button className='btn btn-primary' onClick={clickEvent}>Uppercase</button>
        <button className='btn btn-primary mx-4' onClick={clickLowEvent}>Lowercase</button>
        <button className='btn btn-primary mx-4 mt-2' onClick={clearText}>Clear Text</button>
        </div>
      </div>

      <div className="container py-5">
      <div className="preview-container">
      <div className="preview-title d-flex py-2">
      <h2>Preview Text</h2>
      <div className="previw-text-button">
        <button className='btn btn-primary mx-5' onClick={clickToCopy}>copy text</button>
      </div>
      
      </div>
        <textarea className='form-control' cols="30" rows="10" id='textValue' onChange={valueOfText} value={text}></textarea>
      </div>
      </div>
    </>
  )
}
