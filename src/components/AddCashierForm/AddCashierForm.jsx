import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addCashierForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';
import ColorCheckboxes from '../Checkbox/Checkbox';





export default function AddCashierForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        <div className="formHead">
          <h2>Fechar Caixa</h2>
        </div>
        
        <div className="formContainer">
         
            <div className="row"> 
                <CustomInput name="Código" />           
              <CustomSelect name="Atendente" op1="atendente-1" op2="atendente-1" op3="atendente-1" op4="atendente-1" op5="atendente-1" />
              <CustomInput name="Entrada ($)" />
              <CustomInput name="Saída ($)" />
            </div>

              
            <div className="row">
                <CustomInput name="Data fechamento" />  
              <CustomInput name="Hora fechamento" /> 
            </div>           
        </div>
        
    </div>   
      
    
  );
}
