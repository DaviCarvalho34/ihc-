import { motion } from 'framer-motion';
import Updates from '../Updates/Updates';
import './rightSide.scss';

export default function RightSide() {
    return (
      <motion.div className="RightSide" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div>
          <h3>Notificações</h3>
          <Updates />
        </div>
      </motion.div>
    )
  }