import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addGrForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';





export default function AddGrForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        <div className="formHead">
          <h2>Guia de recolhimento</h2>
        </div>
        
        <div className="formContainer">
            <h3>Unidade favorecida</h3>
            <div className="row">
              <CustomInput name="código"/>
              <CustomInput name="gestão"/>
              <CustomInput name="nome"/>
            </div>
            <h3>Recolhimento</h3>
            <div className="row">
                <CustomInput name="código"/>
                <CustomInput name="nome"/>
            </div>
            
            
        </div>
        
    </div>   
      
    
  );
}
