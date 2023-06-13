import { InvoiceData } from '../../Data/Data';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './invoiceTable.scss';
import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { UilMultiply } from '@iconscout/react-unicons'
import AddProductForm from '../AddProductForm/AddProductForm';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';
import AddSuplierForm from '../AddSupliersForm/AddSupliersForm';

function createData(numPedido, codNf, serie, cfop,dataEmissao,status, actions) {
    return { numPedido, codNf, cfop,dataEmissao,status, actions };
}

const rows =  
    InvoiceData.map((item,index)=>{
    return createData(item.numPedido, item.codNf, item.descricao,item.cfop,item.dataEmissao,(()=>{
        if(item.status === "inactive") {
          return <span className="statusProductInactive">desautorizada</span>
        } else {
          return <span className="statusProductActive">autorizada</span>
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
     name: "numPedido",
     label: "num pedido",
     
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "codNf",
     label: "cod nf",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "cfop",
     label: "CFOP",
     options: {
      filter: true,
      sort: false,
     }
    },
    
    {
     name: "dataEmissao",
     label: "data emissão",
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

export default function InvoiceTable({title}) {

    return (
      
        <MUIDataTable
            title="Notas"
            data={rows}
            columns={columns}
            options={options}
        />    
        
    
    );
  }
  