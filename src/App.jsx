
import { createContext, useState } from 'react';
import './App.scss';

import { MainRoutes } from './components/Routes/MainRoutes';
import IconProfessionalHexagon from './icons/IconProfessionalHexagon';
import CustomInput from './components/customInput/CustomInput';
import CustomPassword from './components/customInput/CustomPassword';
import { UilSignOutAlt } from '@iconscout/react-unicons'





function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    
    <div className="App">
      {isLogged?<UilSignOutAlt className="logout" onClick={()=>setIsLogged(false)} />:null}
      
      {
          isLogged ? <div className="AppGlass">
            
          <MainRoutes />
          <div></div>
        </div> :
        <div className="Login">
        <div className="glass">
            <div className="loginContainer">
                <div className="logo">
                    <IconProfessionalHexagon />
                    <h4>ERP</h4>
                </div>
                <div className="form">
                    <h4>Login</h4>
                    <CustomInput name="Usuário"/>
                    <CustomPassword name="Senha"/>
                    <input type="submit" onClick={()=>setIsLogged(true)} className='loginBtn' />
                </div>
            </div>
        </div>
    </div>
        
      } 
      
    </div>
    
  )
}

export default App
