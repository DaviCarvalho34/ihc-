import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addBudgetForm.scss';
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

export default function AddBudgetForm() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
   
     <div className="AddProductForm">
        <div className="formHead">
          <h2>Orçamento</h2>
          
        </div>
        
        
        <div className="formContainer">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Dados do orçamento" {...a11yProps(0)} />
              <Tab label="Dados do cliente" {...a11yProps(1)} />
              <Tab label="Dados do produto" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
            <div className="row">
              <CustomInput name="cod orçamento"/>
              <InputNumber name="data emissão"/>
              <CustomInput name="data entrega"/>
              <CustomSelect name="condições de pagamento" op1="A vista" op2="Prazo" op3="Boleto" op4="Transferência" />
            </div>
            <div className="row">
              <CustomSelect name="vendedor" op1="vendedor-1" op2="vendedor-2" op3="vendedor-3" op4="vendedor-4" />
              <CustomInput name="valor frete ($)"/>
              <CustomSelect name="status do orçamento" op1="aprovado" op2="reprovado" op3="analise"  />            
            </div>
            <div className="row">
              <CustomTextArea name="Description"/>
            </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="row">
                <CustomInput name="nome/Razão Social"/>           
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
                    <CustomInput name="UN"/>
                    <CustomInput name="quantidade atual"/>
                    <CustomInput name="quantidade"/>
                </div>
                <div className="row" style={{marginTop:'25px'}}>
                    <CustomInput name="preço unitário ($)"/>
                    <CustomInput name="desconto (%)"/>
                    <CustomInput name="ICMS (%)"/>
                    <CustomInput name="IPI (%)"/>
                    <CustomInput name="ICMSST (%)"/>
                </div>
            </TabPanel>
                     
        </div>
        
    </div>   
      
    
  );
}
