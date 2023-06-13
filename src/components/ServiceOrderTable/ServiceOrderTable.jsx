import { ServiceOrderData } from '../../Data/Data';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './serviceOrderTable.scss';
import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { UilMultiply } from '@iconscout/react-unicons'
import AddProductForm from '../AddProductForm/AddProductForm';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';
import AddSuplierForm from '../AddSupliersForm/AddSupliersForm';

function createData(codigo, codNf, tec, descricao, dataEntrada,status, actions) {
    return { codigo, codNf, tec, descricao, dataEntrada,status, actions };
}

const rows =  
    ServiceOrderData.map((item,index)=>{
    return createData(item.codigo, item.codNf, item.tec, item.descricao, item.dataEntrada,(()=>{
        if(item.status === "inactive") {
          return <span className="statusProductInactive">Andamento</span>
        } else {
          return <span className="statusProductActive">Concertado</span>
        }
      }),(()=>{
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
     name: "codNf",
     label: "cod nota fiscal",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "tec",
     label: "tecnico",
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
        name: "dataEntrada",
        label: "data entrada",
        options: {
         filter: true,
         sort: false,
        }
    },
    {
        name: "status",
        label: "status",
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

export default function ServiceOrderTable({title}) {

    return (
      
        <MUIDataTable
            title="ordem de serviço"
            data={rows}
            columns={columns}
            options={options}
        />    
        
    
    );
  }
  