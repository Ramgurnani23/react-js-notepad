import * as React from 'react';
import React, { useState } from 'react';

function TextForms(props) {
  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState('');
  // text = "My Name is Ram"; Wrong way to access this text
  // setText('My Name is Ram'); Correct way to access this state

  const HandleUpClick = () => {
    console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    console.log(newText);
    setText(newText);
  };

  const HandleUpChange = (event) => {
    setText(event.target.value); // Confusions
    console.log('onChange');
  };

  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>

        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={HandleUpChange}
        ></textarea>

        <button className="btn btn-primary" onClick={HandleUpClick}>
          Convert to Uppercase
        </button>
      </div>
    </div>
  );
}
export default TextForms;
