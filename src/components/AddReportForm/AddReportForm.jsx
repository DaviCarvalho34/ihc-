import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addReportForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';
import ColorCheckboxes from '../Checkbox/Checkbox';





export default function AddReportForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        <div className="formHead">
          <h2>Relatório</h2>
        </div>
        
        <div className="formContainer">
         
            <div className="row"> 
                <CustomInput name="Título do relatório" />           
              <CustomSelect name="Selecione a tabela" op1="Caixa" op2="Vendas online" op3="Funcionários" op4="Transportadoras" op5="Clientes" />
              <CustomSelect name="Filtrar relatório" op1="Última semana" op2="Últimos 30 dias" op3="Último trimestre" op4="Último semestre" op5="Último ano" />
            </div>

              
            <div className="row">
              <CustomTextArea name="Description"/>
            </div>           
        </div>
        
    </div>   
      
    
  );
}
