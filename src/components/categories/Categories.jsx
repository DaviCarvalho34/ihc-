import { useState } from "react";
import { motion } from 'framer-motion';
import ProductsTable  from "../productsTable/ProductsTable";
import './categories.scss';
import { Box, Modal } from "@mui/material";
import AddProductForm from "../AddProductForm/AddProductForm";
import { UilMultiply } from '@iconscout/react-unicons'
import CategoryTable from "../categoryTable/CategoryTable";
import AddCategoryForm from "../AddCategoryForm/AddCategoryForm";


export const Categories = () => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div className="Categories" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            
            <h1 className="titleDash">Categories</h1>
            <div className="add-products" onClick={()=>{
            setOpen(true);
            }}>
            <h4>Add a new category</h4>
            </div>
            <div className="table-container">
                <CategoryTable />
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
                    <AddCategoryForm />
                    <input type="submit" className="save" value="Save" />
                </Box>
            </Modal>
            </div>

        </motion.div>
    )
}