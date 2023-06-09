import * as React from 'react';
import './customInput.scss';

export default function CustomInput(props) {
    return(
      <div className="CustomInput">   
        <div class="form-row">
          <input type="text" name="street" class="street" id="street" placeholder={props.name} required/>
        </div>		
      </div>
    )
  }
  