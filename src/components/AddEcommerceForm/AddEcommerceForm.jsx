import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addEcommerceForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';





export default function AddEcommerceForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        <div className="formHead">
          <h2>Ecommerce</h2>
        </div>
        
        <div className="formContainer">
         
            <div className="row">
              <CustomSelect name="tipo de integração" op1="Integração de estoque" op2="Integração de pedidos" op3="Integração de informações de produtos" op4="Integração de dados de clientes" op5="Todos" />
              <CustomInput name="Id App"/>
              <CustomInput name="access token"/>
              <CustomInput name="id user"/>
            </div>
            <div className="row">             
                <CustomInput name="caminho dos arquivos"/>
            </div>
              <h2>Logo Ecommerce</h2>
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
