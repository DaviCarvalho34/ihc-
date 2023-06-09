import { motion } from 'framer-motion';
import Cards from '../cards/Cards';
import './dashboard.scss'
import { ChartArea } from '../chartArea/ChartArea';

export const Dashboard = () => {
    return(
        <motion.div className="Dashboard" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <h1 className='titleDash'>Dashboard</h1>
            <Cards />
            <ChartArea />
        </motion.div>
    )
}