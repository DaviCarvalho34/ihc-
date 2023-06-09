import React from 'react'
import './customInput.scss';

export default function InputNumber(props) {
  return (
    <div className="CustomInput">
       <input type="number" name="street" class="street" id="street" placeholder={props.name} required/>
    </div>
  )
}
