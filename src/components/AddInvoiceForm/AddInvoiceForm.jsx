import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addInvoiceForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';
import ColorCheckboxes from '../Checkbox/Checkbox';
import Checkboxes from '../CheckboxInvoice/CheckboxInvoice';





export default function AddInvoiceForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        <div className="formHead">
          <h2>Nota fiscal</h2>
        </div>
        
        <div className="formContainer">
         
            <div className="row">
              <CustomSelect name="tipo de importação" op1="NF-e de fornecedores" op2="NF-e de transportadora" op3="NF-e emitida por outro sistema" op4="NF-e a emitir" />
              <CustomSelect name="arquivo para importação" op1="arquivo XML" op2="Arquivo PDF" op3="Arquivo TXT" op4="Arquivo JSON" op5="Em lote" />
              <input type="file" className="inputfile2" name="" id="file" />
                <label for="file">carregar arquivo</label>
            </div>
            
                
            <div className="row">
                <Checkboxes />
            </div>
                     
        </div>
        
    </div>   
      
    
  );
}
