import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addFinanceForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';
import ColorCheckboxes from '../Checkbox/Checkbox';





export default function AddFinaceForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        <div className="formHead">
          <h2>Movimentação financeira</h2>
        </div>
        
        <div className="formContainer">
         
            <div className="row">
              <CustomInput name="nome"/>
              <CustomInput name="conta"/>
              <CustomInput name="subconta"/>
              <CustomInput name="centro de custo"/>
            </div>
            <div className="row">             
                <CustomInput name="data de vencimento"/>
                <CustomInput name="competência"/>
                <CustomInput name="valor $"/>
                <CustomSelect name="recorrência" op1="única" op2="diária" op3="semanal" op4="mensal" op5="semestral"/>
                <CustomInput name="lançamentos"/>
                
            </div>
                  
            <div className="row">
              <CustomTextArea name="Description"/>
            </div>
            
            
        </div>
        
    </div>   
      
    
  );
}
