import { useState } from "react";
import { motion } from 'framer-motion';
import ProductsTable  from "../productsTable/ProductsTable";
import './invoiceService.scss';
import { Box, Modal, Tab, Tabs, Typography } from "@mui/material";
import AddProductForm from "../AddProductForm/AddProductForm";
import { UilMultiply } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import AddBudgetForm from "../AddBudgetForm/AddBudgetForm";
import BudgetTable from "../BudgetTable/BudgetTable";
import AddServiceOrderForm from "../AddServiceOrderForm/AddServiceOrderForm";
import ServiceOrderTable from "../ServiceOrderTable/ServiceOrderTable";
import AddInvoiceForm from "../AddInvoiceForm/AddInvoiceForm";
import InvoiceTable from "../InvoiceTable/InvoiceTable";
import AddNoteIssueForm from "../AddNoteIssueForm/AddNoteIssueForm";
import AddServiceInvoiceForm from "../AddServiceInvoiceForm/AddServiceInvoiceForm";



export const InvoiceService = () => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <motion.div className="Products" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            
            <h1 className="titleDash">Notas fiscais de serviço</h1>
            <div className="button-container">
                <div className="add-products" onClick={()=>{
                setOpen(true);
                }}>
                    <h4>Nova NFs - e</h4>
                </div>
                
            </div>
            <div className="table-container">
                <InvoiceTable />
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
                    <AddServiceInvoiceForm />
                    
                    <input type="submit" className="save" value="Salvar" />
                </Box>
                
            </Modal>
            </div>
            <div className="modalContainer">
            <Modal
                open={open1}
                onClose={()=>setOpen(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                
                <Box sx={{width: 600, padding: 3 }}>
                
                    <UilMultiply onClick={()=>{
                    setOpen1(false);
                }} />
                    <AddNoteIssueForm />
                    
                    <input type="submit" className="save" value="Salvar e baixar" />
                </Box>
                
            </Modal>
            </div>

        </motion.div>
    )
}