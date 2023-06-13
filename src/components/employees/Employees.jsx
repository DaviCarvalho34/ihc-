import { useState } from "react";
import { motion } from 'framer-motion';
import ProductsTable  from "../productsTable/ProductsTable";
import './employees.scss';
import { Box, Modal } from "@mui/material";
import AddProductForm from "../AddProductForm/AddProductForm";
import { UilMultiply } from '@iconscout/react-unicons'
import EmployeesTable from "../employeesTable/EmployeesTable";
import AddEmployeeForm from "../AddEmployeeForm/AddEmployeeForm";


export const Employees = () => {

    const [open, setOpen] = useState(false);

    return (
        <motion.div className="Products" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            
            <h1 className="titleDash">Funcionários</h1>
            <div className="add-products" onClick={()=>{
            setOpen(true);
            }}>
            <h4>Novo funcionário</h4>
            </div>
            <div className="table-container">
                <EmployeesTable />
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
                    <input type="submit" className="save" value="Salvar" />
                </Box>
            </Modal>
            </div>

        </motion.div>
    )
}