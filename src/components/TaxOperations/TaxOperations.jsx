import { useState } from "react";
import { motion } from 'framer-motion';
import ProductsTable  from "../productsTable/ProductsTable";
import './taxOperations.scss';
import { Box, Modal } from "@mui/material";
import AddProductForm from "../AddProductForm/AddProductForm";
import { UilMultiply } from '@iconscout/react-unicons'
import EmployeesTable from "../employeesTable/EmployeesTable";
import AddEmployeeForm from "../AddEmployeeForm/AddEmployeeForm";
import SupliersTable from "../SupliersTable/SupliersTable";
import AddSuplierForm from "../AddSupliersForm/AddSupliersForm";
import AddTaxOperationForm from "../AddTaxOperationForm/AddTaxOperationForm";
import TaxOperationsTable from "../TaxOperationsTable/TaxOperationsTable";
import AddGrForm from "../AddGrForm/AddGrForm";


export const TaxOperations = () => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    return (
        <motion.div className="Products" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            
            <h1 className="titleDash">Operações fiscais</h1>
            <div className="button-container">
                <div className="add-products" onClick={()=>{
                setOpen(true);
                }}>
                    <h4>Nova operação</h4>
                </div>
                <div className="add-products" onClick={()=>{
                setOpen1(true);
                }}>
                    <h4>Novo GR</h4>
                </div>
            </div>
            <div className="table-container">
                <TaxOperationsTable />
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
                    <AddTaxOperationForm />
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
                    <AddGrForm />
                    <input type="submit" className="save" value="Salvar" />
                </Box>
            </Modal>
            </div>

        </motion.div>
    )
}