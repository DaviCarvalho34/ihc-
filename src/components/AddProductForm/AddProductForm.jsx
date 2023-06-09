import * as React from 'react';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputNumber from '../customInput/InputNumber';
import './addProductForm.scss';
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

export default function AddProductForm() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
   
     <div className="AddProductForm">
        <div className="formHead">
          <h2>Produto</h2>
          
        </div>
        
        
        <div className="formContainer">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Dados do produto" {...a11yProps(0)} />
              <Tab label="Preço e informações fiscais" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
            <div className="row">
              <CustomInput name="nome do produto"/>
              <CustomSelect name="categoria" op1="laptops" op2="smartphones" op3="relógios" op4="consoles" />
              <InputNumber name="quantidade"/>
              <CustomInput name="descrição curta"/>
              <CustomInput name="código"/>
            </div>
            <div className="row">
              <CustomInput name="palavras chave"/>
              <CustomSelect name="status" op1="ativo" op2="inativo" op3="revisão" op4="sem estoque" />
              <CustomSelect name="fornecedor" op1="Empresa 1" op2="Empresa 2" op3="Empresa 3" op4="Empresa 4" />
              <CustomInput name="marca"/>
            </div>
            <div className="row">
              <CustomInput name="Tamanho"/>
              <CustomSelect name="Garantia" op1="Nenhuma" op2="Básica" op3="Extendida"/>
              <CustomInput name="localização no estoque"/>
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
                <CustomInput name="Preço de custo ($)"/>
                <CustomInput name="Preço de compra ($)"/>
                <CustomInput name="Margem de lucro ($)"/>
                <CustomInput name="Peso líquido (KG)"/>
              </div>
              <div className="row" style={{marginTop:"25px"}}>
                <CustomInput name="Unidade "/>
                <CustomSelect name="Unidade de entrada" op1="Peças" op2="Caixas" op3="Gramas" op4="Litros" op5="Metros"/>
                <CustomSelect name="Unidade de saída" op1="Peças" op2="Caixas" op3="Gramas" op4="Litros" op5="Metros"/> 
                <CustomInput name="NCM(Classificação fiscal) "/>         
              </div>
              <div className="row">
                <CustomInput name="Aliquota de ICMS (%)"/>          
                <CustomInput name="Aliquota de IPI (%)"/>      
                <CustomInput name="Taxa de importação (%)"/>     
              </div>
            </TabPanel>
                     
        </div>
        
    </div>   
      
    
  );
}
