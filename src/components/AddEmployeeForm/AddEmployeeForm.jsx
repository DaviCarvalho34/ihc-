import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addEmployeeForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';





export default function AddEmployeeForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        <div className="formHead">
          <h2>Employee</h2>
        </div>
        
        <div className="formContainer">
         
            <div className="row">
              <CustomInput name="first name"/>
              <CustomInput name="last name"/>
              <CustomInput name="role"/>
              <CustomInput name="email" />
              <CustomInput name="cpf" />
            </div>
            <div className="row">             
            <CustomInput name="phone"/>
              <CustomInput name="admission date"/>
              <CustomSelect name="workday"/>
              <CustomSelect name="permission"/>
            </div>
            <div className="row">             
                <CustomInput name="admin-login"/>
              <CustomInput name="admin-password"/>
              
            </div>
              <h2>Employee photos</h2>
            <div className="rowImage">
              <div className="addImageContainer">
                <ImageUpload />
              </div>
              
            </div>  
        </div>
        
    </div>      
  );
}
