import { ProductsData } from '../../Data/Data';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './productsTable.scss'
import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { UilMultiply } from '@iconscout/react-unicons'
import AddProductForm from '../AddProductForm/AddProductForm';

function createData(productImage, productName, price, category, status, actions) {
    return { productImage, productName, price, category, status, actions };
}

const rows =  
  ProductsData.map((item,index)=>{
    return createData(<img src={item.productImage} style={{width:'80px'}} alt="" />, item.productName, item.price, item.category, (()=>{
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
     name: "category",
     label: "category",
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

export default function ProductsTable() {

    return (
      
        <MUIDataTable
            title={"Products"}
            data={rows}
            columns={columns}
            options={options}
        />    
        
    
    );
  }
  