import { BudgetsData } from '../../Data/Data';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './budgetTable.scss';
import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { UilMultiply } from '@iconscout/react-unicons'
import AddProductForm from '../AddProductForm/AddProductForm';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';
import AddSuplierForm from '../AddSupliersForm/AddSupliersForm';

function createData(codigo, descricao, un,qtd, precoUnitario,valorTotal, actions) {
    return { codigo, descricao, un,qtd, precoUnitario,valorTotal, actions };
}

const rows =  
    BudgetsData.map((item,index)=>{
    return createData(item.codigo, item.descricao, item.un, item.qtd, item.precoUnitario,item.valorTotal,(()=>{
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
     name: "descricao",
     label: "descrição",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "un",
     label: "UN",
     options: {
      filter: true,
      sort: false,
     }
    },
    
    {
     name: "qtd",
     label: "qtd",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
        name: "precoUnitario",
        label: "preço unitário",
        options: {
         filter: true,
         sort: false,
        }
    },
    {
        name: "valorTotal",
        label: "valor total",
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

export default function BudgetTable({title}) {

    return (
      
        <MUIDataTable
            title="orçamentos"
            data={rows}
            columns={columns}
            options={options}
        />    
        
    
    );
  }
  