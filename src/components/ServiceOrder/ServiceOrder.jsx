import { useState } from "react";
import { motion } from 'framer-motion';
import ProductsTable  from "../productsTable/ProductsTable";
import './serviceOrder.scss';
import { Box, Modal, Tab, Tabs, Typography } from "@mui/material";
import AddProductForm from "../AddProductForm/AddProductForm";
import { UilMultiply } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import AddBudgetForm from "../AddBudgetForm/AddBudgetForm";
import BudgetTable from "../BudgetTable/BudgetTable";
import AddServiceOrderForm from "../AddServiceOrderForm/AddServiceOrderForm";
import ServiceOrderTable from "../ServiceOrderTable/ServiceOrderTable";



export const ServiceOrder = () => {

    const [open, setOpen] = useState(false);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <motion.div className="Products" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            
            <h1 className="titleDash">Ordem de serviço</h1>
            <div className="add-products" onClick={()=>{
            setOpen(true);
            }}>
            <h4>Nova ordem</h4>
            </div>
            <div className="table-container">
                <ServiceOrderTable />
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
                    <AddServiceOrderForm />
                    
                    <input type="submit" className="save" value="Salvar" />
                </Box>
                
            </Modal>
            </div>

        </motion.div>
    )
}