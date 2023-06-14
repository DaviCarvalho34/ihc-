import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addCategoryForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';





export default function AddCategoryForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        <div className="formHead">
          <h2>Categorias</h2>
        </div>
        
        <div className="formContainer">
         
            <div className="row">
              <CustomInput name="nome"/>
              <CustomInput name="slug-categoria"/>
              <CustomInput name="palavras chave"/>
              <CustomSelect name="status" />
            </div>
            <div className="row">             
              
            </div>
              <h2>Fotos</h2>
            <div className="rowImage">
              <div className="addImageContainer">
                <ImageUpload />
              </div>
              
            </div>
            <div className="row">
              <CustomTextArea name="Descrição da categoria"/>
            </div>
            
            
        </div>
        
    </div>   
      
    
  );
}
