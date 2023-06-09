import { useEffect, useState } from 'react';
import './sidebar.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { UilBars,UilAngleDown } from "@iconscout/react-unicons";
import { SidebarData } from '../../Data/Data';
import IconProfessionalHexagon from '../../icons/IconProfessionalHexagon';
import { motion } from "framer-motion";
import IconCloseCircle from '../../icons/IconCloseCircle';

export default function Sidebar() {

    const location = useLocation();
    const pathname = location.pathname;
    const [selected, setSelected] = useState(
      null
    );
    const [menuSelected, setMenuSelected] = useState(0);
    const [expanded, setExpanded] = useState(false);
  
  
    const navigate = useNavigate();
  
    useEffect(() => {
        SidebarData.map((item, index) => {
          if (location.pathname === item.navigate) {
            setSelected(item.index);
          }
        });
      }, [location.pathname]);
    

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
    
  return (
    <>
    
        {!expanded && 
            <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpanded(!expanded)}>
                <UilBars />
            </div>  
        } 

        {expanded &&
            <div className="close" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpanded(!expanded)}>
                <IconCloseCircle />
            </div> 
        }
        
        <motion.div className="Sidebar" variants={sidebarVariants} animate={window.innerWidth<=768?`${expanded}`:''}> 
            <div className="logo">
                <IconProfessionalHexagon/>
                <h3>ERP</h3>
            </div>
            
            <div className="menu">
            {SidebarData.map((item, index)=>{
          
            return(
                            
                <div className={selected===index?'menuItem active': 'menuItem'} key={index} onClick={()=>{               
                    setSelected(index);
                    navigate(item.navigate);                          
                }}>
                <div className='menuContent'>
                    <item.icon />
                    <span>
                    {item.heading }
                    </span>
                </div>             
                </div>
            )
            
            })}
            </div>

        </motion.div>
    </>
  )
}

