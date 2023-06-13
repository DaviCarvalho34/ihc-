import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addServiceInvoiceForm.scss';
import Switch from '@mui/material/Switch';
import DragDrop from '../dragDrop/DragDrop';
import { ImageUpload } from '../ImageUpload/ImageUpload';
import ColorCheckboxes from '../Checkbox/Checkbox';
import Checkboxes from '../CheckboxInvoice/CheckboxInvoice';
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
  





export default function AddServiceInvoiceForm() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
 
  return (
   
    <div className="AddProductForm">
    <div className="formHead">
      <h2>Nota de serviço</h2>     
    </div>
    
    
    <div className="formContainer">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Dados da nota fiscal" {...a11yProps(0)} />
          <Tab label="Valores/impostos" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
        <div className="row">
          <CustomInput name="cód Nfs"/>       
          <CustomInput name="data de emissão"/>
          <CustomInput name="nota fiscal"/>
          <CustomInput name="número RPS"/>
          <CustomInput name="serié"/>
          <CustomInput name="tipo"/>        
        </div>
        <div className="row" style={{marginTop:'15px'}}>
            <CustomInput name="Status da NFS-e"/>  
            <CustomInput name="código de  verificação"/> 
            <CustomInput name="código cliente"/> 
            <CustomInput name="razão social/nome fantasia"/> 
            <CustomInput name="cnpj / cpf"/> 
        </div>
        <div className="row" style={{marginTop:'15px'}}>
            <CustomInput name="codigo os"/>  
            <CustomSelect name="condições de pagamento" op1="parcelado" op2="a vista"/>
            <CustomSelect name="local de tributação" op1="local 1" op2="local 2"/>
            <CustomInput name="uf"/> 
            <CustomInput name="municipio"/>       
        </div>
                  
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="row">
            <CustomInput name="valores do serviço"/> 
            <CustomInput name="valor das deduções"/>
            <CustomInput name="valor desconto"/>
            <CustomInput name="outras retenções"/>
            <CustomInput name="aliquota ISS(%)"/>
            <CustomInput name="valor ISS(%)"/>
          </div>
          <div className="row" style={{marginTop:'15px'}}>
            <CustomInput name="valor pis"/>  
            <CustomInput name="valor cofins"/> 
            <CustomInput name="valor INSS"/> 
            <CustomInput name="valor IRPJ"/> 
            <CustomInput name="valor CSLL"/> 
         </div>
         <div className="row">
            <CustomTextArea />
         </div>
        </TabPanel>
                 
    </div>
    
</div> 
      
    
  );
}
