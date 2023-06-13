import { ReportsData } from '../../Data/Data';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './reportsTable.scss';
import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { UilMultiply } from '@iconscout/react-unicons'
import AddProductForm from '../AddProductForm/AddProductForm';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';
import AddSuplierForm from '../AddSupliersForm/AddSupliersForm';

function createData(id, titulo, tabela, data, actions ) {
    return { id, titulo, tabela, data, actions };
}

const rows =  
    ReportsData.map((item,index)=>{
    return createData(item.id, item.titulo, item.tabela, item.data,(()=>{
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
     name: "id",
     label: "id",
     
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "titulo",
     label: "título",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "tabela",
     label: "tabela",
     options: {
      filter: true,
      sort: false,
     }
    },
    
    {
     name: "data",
     label: "data",
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

export default function ReportsTable({title}) {

    return (
      
        <MUIDataTable
            title="Relatórios"
            data={rows}
            columns={columns}
            options={options}
        />    
        
    
    );
  }
  