import { CashierData } from '../../Data/Data';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './cashierLockTable.scss';
import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { UilMultiply } from '@iconscout/react-unicons'
import AddProductForm from '../AddProductForm/AddProductForm';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';
import AddSuplierForm from '../AddSupliersForm/AddSupliersForm';

function createData(cod, atendente, data, hora,status, actions) {
    return { cod, atendente, data, hora,status, actions };
}

const rows =  
    CashierData.map((item,index)=>{
    return createData(item.cod, item.atendente, item.data,item.hora,(()=>{
        if(item.status === "inactive") {
          return <span className="statusProductInactive">pendente</span>
        } else {
          return <span className="statusProductActive">fechado</span>
        }
      }),(()=>{
      const [open, setOpen] = useState(false);
      return (
      <div className="actions">
        
        <div className="delete">          
          <DeleteIcon />
        </div>
      </div>
      )
      
    }));
  });

  const columns = [
    {
     name: "cod",
     label: "cod",
     
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "atendente",
     label: "atendente",
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
     name: "hora",
     label: "hora",
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

export default function CashierLockTable({title}) {

    return (
      
        <MUIDataTable
            title="Últimos fechamentos"
            data={rows}
            columns={columns}
            options={options}
        />    
        
    
    );
  }
  