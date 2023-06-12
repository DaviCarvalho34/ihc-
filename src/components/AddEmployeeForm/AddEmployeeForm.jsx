import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addEmployeeForm.scss';
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



export default function AddEmployeeForm() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onUpload = (files) => {
    console.log(files);
  }
 
  return (
   
     <div className="AddCategoryForm">
        <div className="formHead">
          <h2>Funcionário</h2>
        </div>
        
        <div className="formContainer">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Dados do funcionário" {...a11yProps(0)} />
                  <Tab label="Endereço e pagamento" {...a11yProps(1)} />
              </Tabs>
         
           <TabPanel value={value} index={0}>
            <div className="row">
                <CustomInput name="Nome"/>               
                <CustomInput name="data de admissão"/>
                <CustomSelect name="centro de custo" op1="departamentos" op2="projetos" op3="localização geográfica"/>
                <CustomSelect name="cargo" op1="desenvolvedor" op2="vendedor" op3="designer" op4="representante" op5="gerente"/>
                <CustomInput name="cpf"/>
              </div>
              <div className="row">             
                <CustomInput name="remuneração ($)"/>
                <CustomInput name="Horário de entrada"/>
                <CustomInput name="Horário de saída"/>
                <CustomInput name="comissão (%)"/>
                
                <CustomInput name="rg"/> 
              </div>     
                                    
                <h2>Employee photos</h2>
              <div className="rowImage">
                <div className="addImageContainer">
                  <ImageUpload />
                </div>
                
              </div>  
           </TabPanel>
           <TabPanel value={value} index={1}>
            <div className="row">
                  <CustomInput name="cep"/>               
                  <CustomInput name="endereço"/>
                  <CustomInput name="bairro"/>
                  <CustomSelect name="UF" op1="AL" op2="BA" op3="SP" op4="RJ" op5="MJ"/>
                <CustomSelect name="Cidade" op1="Salvador" op2="São Paulo" op3="Teolandia" op4="Belo Horizonte" op5="Valença"/> 
                <CustomInput name="Telefone"/>   
                </div>
                <div className="row">             
                  <CustomInput name="celular"/>
                  <CustomInput name="email"/>
                  <CustomInput name="razão social (se for cnpj)"/>
                  <CustomInput name="Banco"/>               
                  <CustomInput name="Agência"/>
                  <CustomInput name="num conta"/>
                </div>   
                
           </TabPanel>
           
        </div>
        
    </div>      
  );
}
