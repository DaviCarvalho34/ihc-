import { OrdersData } from '../../Data/Data';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './ordersTable.scss'
import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { UilMultiply } from '@iconscout/react-unicons'
import AddProductForm from '../AddProductForm/AddProductForm';

function createData(productImage, productName, price, nomeCliente, entrega, actions) {
    return { productImage, productName, price, nomeCliente, entrega, actions };
}

const rows =  
  OrdersData.map((item,index)=>{
    return createData(<img src={item.productImage} style={{width:'80px'}} alt="" />, item.productName, item.price, item.nomeCliente, item.entrega,(()=>{
      const [open, setOpen] = useState(false);
      return (
      <div className="actions">
        
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
                    <AddProductForm />
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
     name: "productImage",
     label: "image",
     
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "productName",
     label: "name",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "price",
     label: "price",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "nomeCliente",
     label: "comprador",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "entrega",
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

export default function OrdersTable() {

    return (
      
        <MUIDataTable
            title={"vendas"}
            data={rows}
            columns={columns}
            options={options}
        />    
        
    
    );
  }
  