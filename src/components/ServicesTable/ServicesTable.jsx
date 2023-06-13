import { ServicesData } from '../../Data/Data';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './servicesTable.scss';
import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { UilMultiply } from '@iconscout/react-unicons'
import AddProductForm from '../AddProductForm/AddProductForm';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';
import AddSuplierForm from '../AddSupliersForm/AddSupliersForm';

function createData(codigo, unidade, valor, descricao, actions) {
    return { codigo, unidade, valor, descricao, actions };
}

const rows =  
    ServicesData.map((item,index)=>{
    return createData(item.codigo, item.unidade, item.valor, item.descricao,(()=>{
      const [open, setOpen] = useState(false);
      return (
      <div className="actions">
        <div className="edit">
          <EditIcon onClick={() => {
            setOpen(true);
          }} />
        </div>
        
        <div className="modalContainer">
            
            <Modal
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{width: 600, padding: 3 }}>
                    <UilMultiply onClick={()=>{
                    setOpen(false);
                }} />
                    <AddSuplierForm />
                    <input type="submit" className="save" value="Save" />
                </Box>
            </Modal>
            </div>
        <div className="delete">          
          <DeleteIcon />
        </div>
      </div>
      )
      
    }));
  });

  const columns = [
    {
     name: "codigo",
     label: "codigo",
     
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "unidade",
     label: "unidade",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "valor",
     label: "valor",
     options: {
      filter: true,
      sort: false,
     }
    },
    
    {
     name: "descricao",
     label: "descrição",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
      name: "actions",
      label: "actions",
      options: {
       filter: true,
       sort: false,
      }
     }
    
   ];

   const options = {
        filterType: 'checkbox',
        rowsPerPageOptions: [4, 10, 20, 50],
    };

export default function ServicesTable({title}) {

    return (
      
        <MUIDataTable
            title="serviços"
            data={rows}
            columns={columns}
            options={options}
        />    
        
    
    );
  }
  