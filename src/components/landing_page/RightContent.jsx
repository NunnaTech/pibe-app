import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
export const RightContent=()=>{
    let navigate = useNavigate();
    const goToLogin = () => {
		navigate('/login');
		window.location.reload(false);
	};
    return (
        <>
         <Button label="Iniciar Sesión" onClick={goToLogin} className="p-button-secondary" />
        </>
    )
}