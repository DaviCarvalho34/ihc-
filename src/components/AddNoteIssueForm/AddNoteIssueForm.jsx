import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addNoteIssueForm.scss';
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

export default function AddNoteIssueForm() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
   
     <div className="AddProductForm">
        <div className="formHead">
          <h2>Emitir Nota</h2>
          
        </div>
        
        
        <div className="formContainer">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Dados da nota fiscal" {...a11yProps(0)} />
              <Tab label="Dados do cliente" {...a11yProps(1)} />
              <Tab label="Dados do produto" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
            <div className="row">
              <CustomInput name="id Nf"/>       
              <CustomInput name="pedido de venda"/>
              <CustomInput name="data de emissão"/>
              <CustomInput name="data de saída"/>
              <CustomInput name="hora"/>
              <CustomInput name="orçamento"/>
              
            </div>
            <div className="row" style={{marginTop:'15px'}}>
                <CustomSelect name="ordem de serviço" op1="ordem 1" op2="ordem 2" op3="ordem 3" op4="ordem 4" />
                <CustomSelect name="tipo da nota fiscal" op1="Entrada" op2="Saída"/>
                <CustomSelect name="condições de pagamento" op1="parcelado" op2="a vista"/>
                <CustomInput name="cfop"/>
               
            </div>
            <div className="row" style={{marginBottom:'15px'}} >
                <CustomInput name="condições de entrega"/>
              <CustomInput name="serié"/>             
            </div>            
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="row">
                <CustomInput name="Cod Cliente"/>
                <CustomInput name="Nome/Razão social do destinatário da nota fiscal"/>
                <CustomSelect name="Vendedor" op1="vendedor-1" op2="vendedor-1" op3="vendedor-1" op4="vendedor-1" op5="vendedor-1"/> 
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="row">
                <CustomInput name="Cod Produto"/>
                <CustomInput name="Descrição produto"/>
                <CustomInput name="Un"/>
                <CustomInput name="Qt estoque"/>
                <CustomInput name="Quantidade"/>
                <CustomInput name="Preço unitário"/>
              </div>
              <div className="row" style={{marginBottom:'15px'}}>
                <CustomInput name="CSON"/>
                <CustomInput name="BC ICMS"/>
                <CustomInput name="ICMS (%)"/>
                <CustomInput name="Crédito ICMS"/>
                <CustomInput name="CST IPI"/>
                <CustomInput name="BC IPI"/>
                <CustomInput name="IPI (%)"/>
              </div>
              <div className="row">
                <CustomInput name="CST PIS"/>
                <CustomInput name="BC PIS"/>
                <CustomInput name="PIS (%)"/>
                <CustomInput name="Vlr PIS"/>
                <CustomInput name="CST Cofins"/>
                <CustomInput name="BC Cofins"/>
                <CustomInput name="Peso (kg)"/>
              </div>
              <div className="row" style={{marginBottom:'15px'}}>
                <CustomTextArea />
              </div>
            </TabPanel>
                     
        </div>
        
    </div>   
      
    
  );
}
