import * as React from 'react';
import './customInput.scss';

export default function CustomPassword(props) {
    return(
      <div className="CustomInput">   
        <div class="form-row">
          <input type="password" name="street" class="street" id="street" placeholder={props.name} required/>
        </div>		
      </div>
    )
  }
  