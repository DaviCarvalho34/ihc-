import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addCarriersForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function AddVehiclesForm() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
   
     <div className="AddProductForm">
        <div className="formHead">
          <h2>Veículos</h2>
          
        </div>
        
        
        <div className="formContainer">
               
            <div className="row">
              <CustomInput name="código"/>           
              <CustomInput name="marca"/>
              <CustomInput name="modelo"/>
              <CustomInput name="placa"/>
            </div>
            <div className="row" style={{marginTop:'25px'}}>
              <CustomSelect name="Transportadora" op1="Transportadora-1" op2="Transportadora-2" op3="Transportadora-3" op4="Transportadora-4"/>                      
            </div>
              <h2>Fotos</h2>
            <div className="rowImage">
              <div className="addImageContainer">
                <ImageUpload />
              </div>
              
            </div>
            <div className="row">
              <CustomTextArea name="Description"/>
            </div>
            
        </div>
        
    </div>   
      
    
  );
}
