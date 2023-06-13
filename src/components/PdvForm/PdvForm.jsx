import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './pdvForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';





export default function PdvForm() {

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        
        
        <div className="formContainer">
         
            <div className="row">
              <CustomInput name="data 00/00/00"/>
              <CustomInput name="hora 00.00.00"/>
              <CustomInput name="caixa"/>
              <CustomInput name="op" />
            </div>
            <div className="row">             
                <CustomInput name="consumidor"/>
                <CustomInput name="cpf"/>
                <CustomInput name="produto"/>
            </div>
            <div className="row">             
                <CustomInput name="un"/>
                <CustomInput name="preço unitário"/>
                <CustomInput name="produto"/>
                <CustomInput name="total item"/>
            </div>
            <div className="row">   
                <CustomInput name="código de barras"/>           
                <CustomSelect name="Forma de pagamento" op1="cartão" op2="dinheiro"/>  
                <CustomInput name="desconto (%)"/>      
            </div>

            <div className="info">
                <h4>Descrição do produto</h4>
                <span>Código - un - Quantidade - pco.Unit - pco.Total</span>
            </div> 
            <div className="op">
                <div className="box">
                    <p>Ítens</p>
                    <p>0,000</p>
                </div>
                <div className="box">
                    <p>Valor total dos produtos</p>
                    <p>0,000</p>
                </div>
                <div className="box">
                    <p>Desconto</p>
                    <p>0,000</p>
                </div>
                <div className="box">
                    <p>Troco</p>
                    <p>0,000</p>
                </div>
            </div>

            <div className="op" style={{marginTop: '30px'}}>
                <div className="act">
                    Nova Venda
                </div>
                <div className="act">
                    Finalizar venda
                </div>
                <div className="act">
                    Cancelar item
                </div>
            </div>
                          
        </div>
        
    </div>   
      
    
  );
}
