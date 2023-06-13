import { EmployeesData } from '../../Data/Data';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './employeesTable.scss'
import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { UilMultiply } from '@iconscout/react-unicons'
import AddProductForm from '../AddProductForm/AddProductForm';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';

function createData(customerImage, customerName, email, cpf, status, actions) {
    return { customerImage, customerName, email, cpf, status, actions };
}

const rows =  
  EmployeesData.map((item,index)=>{
    return createData(<img src={item.customerImage} style={{width:'80px'}} alt="" />, item.customerName, item.email, item.cpf, (()=>{
      if(item.status === "inactive") {
        return <span className="statusProductInactive">Inactive</span>
      } else {
        return <span className="statusProductActive">Active</span>
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
                    <AddEmployeeForm />
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

  const makeStyle=(status)=>{
    if(status === 'inactive')
    {
      return {
        background: '#ffadad8f',
        color: 'red',
      }
    }
    else
    {
      return{
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      }
    }
  }

  const columns = [
    {
     name: "customerImage",
     label: "foto",
     
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "customerName",
     label: "nome",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "email",
     label: "email",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "cpf",
     label: "cpf",
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
      label: "ações",
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

export default function EmployeesTable() {

    return (
      
        <MUIDataTable
            title={"Funcionários"}
            data={rows}
            columns={columns}
            options={options}
        />    
        
    
    );
  }
  