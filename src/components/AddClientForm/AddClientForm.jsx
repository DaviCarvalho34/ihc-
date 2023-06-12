import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addClientForm.scss';
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

export default function AddClientForm() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
   
     <div className="AddProductForm">
        <div className="formHead">
          <h2>Cliente</h2>
          
        </div>
        
        
        <div className="formContainer">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Dados do cliente" {...a11yProps(0)} />
              <Tab label="Endereço" {...a11yProps(1)} />
              <Tab label="Informações de pagamento" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
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
              
            </div>
              <h2>Fotos</h2>
            <div className="rowImage">
              <div className="addImageContainer">
                <ImageUpload />
              </div>
              
            </div>
            <div className="row">
              <CustomTextArea name="Description"/>
            </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="row">
                <CustomInput name="Cep"/>
                <CustomInput name="Endereço"/>
                <CustomInput name="Complemento"/>
                <CustomInput name="Bairro"/>
              </div>
              <div className="row" style={{marginTop:"25px"}}>
                <CustomInput name="País"/>
                <CustomSelect name="UF" op1="AL" op2="BA" op3="SP" op4="RJ" op5="MJ"/>
                <CustomSelect name="Cidade" op1="Salvador" op2="São Paulo" op3="Teolandia" op4="Belo Horizonte" op5="Valença"/> 
                <CustomInput name="Telefone"/>   
                <CustomInput name="Fax"/>         
              </div>
              <div className="row" style={{marginBottom:"25px"}}>
                <CustomInput name="Celular"/>
                <CustomInput name="Email"/>   
                <CustomInput name="Site"/>         
              </div>
             
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className="row">
                    <CustomInput name="Observações"/>
                    <CustomSelect name="Condições de pagamento" op1="A vista" op2="Parcelado" op3="Boleto" op4="Trânsferencia" op5="Descontos"/> 
                    <CustomSelect name="Plano de Contas" op1="Plano-1" op2="Plano-2" op3="Plano-3" op4="Plano-4" op5="Plano-5"/> 
                    <CustomInput name="Grupo de Clientes"/>                  
                </div>
                <div className="row">
                    <CustomSelect name="Tipo de Cliente (subst. Tributária)" op1="Contribuinte Substituto" op2="Consumidor Final" op3="Distribuidor ou revendedor"/> 
                    <CustomInput name="Inscrição municipal"/>
                </div>
            </TabPanel>
                     
        </div>
        
    </div>   
      
    
  );
}
