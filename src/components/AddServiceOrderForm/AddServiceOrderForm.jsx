import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addServiceOrderForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        
          <Typography>{children}</Typography>
        
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AddServiceOrderForm() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
   
     <div className="AddProductForm">
        <div className="formHead">
          <h2>Ordem de serviço</h2>
          
        </div>
        
        
        <div className="formContainer">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Dados da ordem de serviço" {...a11yProps(0)} />
              <Tab label="Dados do cliente" {...a11yProps(1)} />
              <Tab label="Dados do produto" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
            <div className="row">
              <CustomInput name="cod da os"/>
              <InputNumber name="data de entrada"/>
              <CustomInput name="hora"/>
              <CustomSelect name="Tipo de ordem de serviço" op1="Manutenção" op2="Reparo" op3="Instalação" op4="Atendimento" op5="Entrega" />
            </div>
            <div className="row">
              <CustomSelect name="Tecnico responsável" op1="vendedor-1" op2="vendedor-2" op3="vendedor-3" op4="vendedor-4" />
              <CustomInput name="previsão de entrega"/>
              <CustomInput name="hora"/>
              <CustomInput name="valor do frete ($)"/>    
              <CustomInput name="garantia até"/>        
            </div>
            <div className="row">
              <CustomTextArea name="Description"/>
            </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="row">
                <CustomInput name="nome/Razão Social do destinatário da nota fiscal"/>           
                <CustomInput name="profissão"/>
                <CustomInput name="código"/>
                <CustomInput name="nome fantasia"/>
                </div>
                <div className="row" style={{marginTop:'25px'}}>
                <CustomSelect name="Tipo de Pessoa" op1="Física" op2="Jurídica" />
                <CustomSelect name="fornecedor" op1="Empresa 1" op2="Empresa 2" op3="Empresa 3" op4="Empresa 4" />
                <CustomInput name="CPF/CNPJ"/>
                <CustomInput name="Inscrição estadual"/>
                <CustomInput name="uf"/>
                <CustomInput name="cidade"/>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className="row">
                    <CustomInput name="cod produto"/>
                    <CustomInput name="descrição produto"/>
                    <CustomSelect name="modelo" op1="modelo-1" op2="modelo-2" op3="modelo-3"/>
                    <CustomInput name="descrição do produto"/>
                </div>
                <div className="row" style={{marginTop:'25px'}}>
                    
                    <CustomTextArea />
                </div>
            </TabPanel>
                     
        </div>
        
    </div>   
      
    
  );
}
