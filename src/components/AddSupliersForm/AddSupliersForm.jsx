import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addSupliersForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';





export default function AddSuplierForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        <div className="formHead">
          <h2>Suplier</h2>
        </div>
        
        <div className="formContainer">
         
            <div className="row">
              <CustomInput name="suplier name"/>
              <CustomInput name="main contact"/>
              <CustomInput name="address"/>
              <CustomInput name="e-mail" />
              <CustomInput name="phone" />
            </div>
            <div className="row">             
            <CustomInput name="website"/>  
              <CustomSelect name="product-category"/>
            </div>
            
            <h2>Bank information</h2>
            <div className="row">
                <CustomInput name="account-number"/>
                <CustomInput name="agency"/>
                <CustomInput name="bank"/>
            </div> 
              <h2>Supliers photos</h2>
            <div className="rowImage">
              <div className="addImageContainer">
                <ImageUpload />
              </div>            
            </div> 
            <div className="row">
                <CustomTextArea />
            </div>


        </div>
        
    </div>      
  );
}
