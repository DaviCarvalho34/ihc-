import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addServicesForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';
import ColorCheckboxes from '../Checkbox/Checkbox';





export default function AddServicesForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        <div className="formHead">
          <h2>Serviços</h2>
        </div>
        
        <div className="formContainer">
         
            <div className="row">
              <CustomInput name="codigo"/>
              <CustomInput name="descrição abreviada"/>
              <CustomSelect name="Unidade" op1="Horas" op2="Dias" op3="Quantidade" op4="Ocorrências" op5="Visitas" />
              <CustomInput name="CST PIS"/>
            </div>
            <div className="row">             
                <CustomInput name="CST COFINS"/>
                <CustomInput name="natureza da operação"/>
                <CustomInput name="garantia"/> 
                <CustomInput name="valor ($)"/>         
            </div>
           <div className="row">
                <CustomSelect name="Código do serviço sujeito ao ISS (LC 116/03)" op1="01.01 - Serviços de medicina e odontologia" op2="03.01 - Serviços de arquitetura." op3="04.01 - Serviços de engenharia." op4="05.01 - Serviços de consultoria em geral." op5="06.01 - Serviços de publicidade." />
                <CustomInput name="bairro"/> 
                  
           </div>
           <div className="row">
            <CustomInput name="país"/> 
                <CustomInput name="uf"/>
                <CustomInput name="cidade"/>
                <CustomInput name="telefone"/> 
           </div>
              
            <div className="row">
              <CustomTextArea name="Description"/>
            </div>
            
            
        </div>
        
    </div>   
      
    
  );
}
