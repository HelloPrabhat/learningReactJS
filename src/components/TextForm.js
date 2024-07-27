import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => {
      setText(text.toUpperCase());
  }
  const handleLoClick = () => {
    setText(text.toLowerCase());
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleClearText = () => {
    setText("");
  }

  
  return (
    <>        
        {/* <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>  */}
        <div className="mb-3 my-3" >
            
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.Heading}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" style={props.mode} value={text} onChange={handleOnChange} rows="10" placeholder='Enter your Text here'></textarea>

            <div className="my-3">
              <button className="btn btn-primary" onClick={handleUpClick} >UPPER CASE</button>
              <button className="btn btn-primary mx-3" onClick={handleLoClick} >lower case</button>
              <button className="btn btn-primary " onClick={handleClearText} >Clear Text</button>
            </div>
        </div>
        <div className="container" >
          <h1>your text summary</h1>
          <p>{text.split(" ").length} Words and {text.length} Characters</p>
        </div>
        <div className="container" >
          <h2>Preview : </h2>
          <p className="container" >{text}</p>
        </div>
    </>
  )
}

TextForm.protoTypes = {
  Heading : PropTypes.string
}
TextForm.defaultProps = {
  Heading : "Enter Your Text"
}

