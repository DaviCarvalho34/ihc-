import { useState } from "react";
import { motion } from 'framer-motion';
import ProductsTable  from "../productsTable/ProductsTable";
import './customers.scss';
import { Box, Modal } from "@mui/material";
import AddProductForm from "../AddProductForm/AddProductForm";
import { UilMultiply } from '@iconscout/react-unicons'
import CustomersTable from "../customersTable/CustomersTable";


export const Customers = () => {

    const [open, setOpen] = useState(false);

    return (
        <motion.div className="Products" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            
            <h1 className="titleDash">Usuários</h1>
            <div className="table-container">
                <CustomersTable />
            </div>

            

        </motion.div>
    )
}