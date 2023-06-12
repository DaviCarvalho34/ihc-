import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addTaxOperationForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';
import ColorCheckboxes from '../Checkbox/Checkbox';





export default function AddTaxOperationForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        <div className="formHead">
          <h2>Operação fiscal</h2>
        </div>
        
        <div className="formContainer">
         
            <div className="row">
              <CustomInput name="codigo"/>
              <CustomInput name="natureza da operação"/>
              <CustomInput name="descrição abreviada"/>
              <CustomSelect name="CFOP" op1="Entradas de mercadorias" op2="Saídas de mercadorias" op3="Operações de Transferências" op4="Operações de importação e importação" />
            </div>
            <div className="row">             
                <CustomInput name="CST-ICMS"/>
                <CustomInput name="CST-PIS"/>
                <CustomInput name="COFINS"/>
                <CustomInput name="CST-IPI"/>
                <CustomInput name="CSON"/>
            </div>
            <div className="row">
                <ColorCheckboxes />
            </div>
              
            <div className="row">
              <CustomTextArea name="Description"/>
            </div>
            
            
        </div>
        
    </div>   
      
    
  );
}
