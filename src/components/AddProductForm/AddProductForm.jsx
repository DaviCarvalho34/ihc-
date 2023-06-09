import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addProductForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';





export default function AddProductForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddProductForm">
        <div className="formHead">
          <h2>Product</h2>
        </div>
        
        <div className="formContainer">
         
            <div className="row">
              <CustomInput name="product name"/>
              <CustomSelect name="category" />
              <InputNumber name="quantity"/>
              <CustomInput name="short description"/>
              <CustomInput name="SKU"/>
            </div>
            <div className="row">
              <CustomInput name="price"/>
              <CustomInput name="keywords"/>
              <CustomSelect name="status" />
              <CustomSelect name="supplier" />
              <CustomInput name="brand"/>
            </div>
              <h2>Images</h2>
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
