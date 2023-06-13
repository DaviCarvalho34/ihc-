import { useContext, useState } from 'react'
import IconProfessionalHexagon from '../../icons/IconProfessionalHexagon'
import CustomInput from '../customInput/CustomInput'
import './login.scss'

export const LoginDash = () => {
    
    const [isLogged, handleIsLogged] = useContext(EstadoContext);

    return (
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
                        <CustomInput name="Senha"/>
                        <input type="submit" onClick={handleIsLogged} className='loginBtn' />
                    </div>
                </div>
            </div>
        </div>
    )
}