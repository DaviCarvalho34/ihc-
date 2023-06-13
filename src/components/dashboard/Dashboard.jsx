import { motion } from 'framer-motion';
import Cards from '../cards/Cards';
import './dashboard.scss'
import { ChartArea } from '../chartArea/ChartArea';
import { useState } from 'react';
import { Box, Modal, Tab, Tabs, Typography } from "@mui/material";
import AddProductForm from "../AddProductForm/AddProductForm";
import { UilMultiply } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import AddFinaceForm from '../AddFinanceForm/AddFinanceForm';

export const Dashboard = () => {
    const [open, setOpen] = useState(false);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <motion.div className="Dashboard" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <h1 className='titleDash'>Dashboard</h1>
            <Cards />
            <div className="add-products" onClick={()=>{
            setOpen(true);
            }}>
            <h4>Nova movimentação</h4>
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
                    <AddFinaceForm />
                    
                    <input type="submit" className="save" value="Salvar" />
                </Box>
                
            </Modal>
            </div>
            <ChartArea />
        </motion.div>
    )
}