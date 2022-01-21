import React from 'react';
import './InputContainer.css'

function InputContainer(props) {
  return (
    <div className="InputContainer">
        <label>{props.label}:</label>
        {props.children}
    </div> 
  )
}

export default InputContainer;
