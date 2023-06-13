import { useState } from "react";
import { motion } from 'framer-motion';
import ProductsTable  from "../productsTable/ProductsTable";
import './cashierLock.scss';
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
import AddReportForm from "../AddReportForm/AddReportForm";
import ReportsTable from "../ReportTable/ReportsTable";
import AddCashierForm from "../AddCashierForm/AddCashierForm";
import CashierLockTable from "../CashierLockTable/CashierLockTable";


export const CashierLock = () => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    return (
        <motion.div className="Products" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            
            <h1 className="titleDash">Fechamento de caixa</h1>
            <div className="button-container">
                <div className="add-products" onClick={()=>{
                setOpen(true);
                }}>
                    <h4>Iniciar fechamento</h4>
                </div>
               
            </div>
            <div className="table-container">
                <CashierLockTable />
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
                    <AddCashierForm />
                    <input type="submit" className="save" value="Gerar extrato" />
                </Box>
            </Modal>
            </div>

        </motion.div>
    )
}