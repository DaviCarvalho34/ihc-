import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addAccountForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';
import ColorCheckboxes from '../Checkbox/Checkbox';





export default function AddAccountForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        <div className="formHead">
          <h2>Plano de contas</h2>
        </div>
        
        <div className="formContainer">
         
            <div className="row">
              <CustomInput name="codigo"/>
              <CustomInput name="código estendido"/>
              <CustomInput name="descrição abreviada"/>
              <CustomSelect name="grupo" op1="Despesas" op2="Receitas" />
            </div>
            <div className="row">             
                <CustomSelect name="Tipo de conta" op1="Padrão" op2="Setorial" op3="Analítico" op4="Centro de custo" op5="Projeto" />
                <CustomSelect name="Conta correspondente" op1="Conta-1" op2="Conta-2" op3="Conta-3" op4="Conta-4" op5="Conta-5" />               
            </div>
           
              
            <div className="row">
              <CustomTextArea name="Description"/>
            </div>
            
            
        </div>
        
    </div>   
      
    
  );
}
