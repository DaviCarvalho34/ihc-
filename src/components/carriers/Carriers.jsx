import { useState } from "react";
import { motion } from 'framer-motion';
import ProductsTable  from "../productsTable/ProductsTable";
import './carriers.scss';
import { Box, Modal, Tab, Tabs, Typography } from "@mui/material";
import AddProductForm from "../AddProductForm/AddProductForm";
import { UilMultiply } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import AddCarriersForm from "../AddCarriersForm/AddCarriersForm";
import AddVehiclesForm from "../AddCarriersForm/AddVehicle";
import CarriersTable from "../CarriersTable/CarriersTable";



export const Carriers = () => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <motion.div className="Products" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            
            <h1 className="titleDash">Transportadoras</h1>
            
            <div className="button-container">
                <div className="add-products" onClick={()=>{
                setOpen(true);
                }}>
                    <h4>Nova transportadora</h4>
                </div>
                <div className="add-products" onClick={()=>{
                setOpen1(true);
                }}>
                    <h4>Novo veículo</h4>
                </div>
            </div>
            <div className="table-container">
                <CarriersTable />
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
                    <AddCarriersForm />
                    
                    <input type="submit" className="save" value="Salvar" />
                </Box>
                
            </Modal>
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
                    
                    <AddVehiclesForm />
                    <input type="submit" className="save" value="Salvar" />
                </Box>
                
            </Modal>
            </div>

        </motion.div>
    )
}