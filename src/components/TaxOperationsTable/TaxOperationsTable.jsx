import { TaxOperationData } from '../../Data/Data';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './taxOperationTable.scss';
import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { UilMultiply } from '@iconscout/react-unicons'
import AddProductForm from '../AddProductForm/AddProductForm';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';
import AddSuplierForm from '../AddSupliersForm/AddSupliersForm';

function createData(cfop, natureName, gerarFaturamento, gerarEstoque, actions) {
    return { cfop, natureName, gerarFaturamento, gerarEstoque, actions };
}

const rows =  
    TaxOperationData.map((item,index)=>{
    return createData(item.cfop, item.natureName, item.gerarFaturamento, item.gerarEstoque,(()=>{
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
     name: "cfop",
     label: "CFOP",
     
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "natureName",
     label: "natureza",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "gerarFaturamento",
     label: "gerar faturamento",
     options: {
      filter: true,
      sort: false,
     }
    },
    
    {
     name: "gerarEstoque",
     label: "gerarEstoque",
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

export default function TaxOperationsTable({title}) {

    return (
      
        <MUIDataTable
            title="operações fiscais"
            data={rows}
            columns={columns}
            options={options}
        />    
        
    
    );
  }
  