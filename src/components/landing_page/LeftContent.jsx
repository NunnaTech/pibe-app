import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import Logo from "../../resources/static/img/logo.svg"
export const LeftContent = () => {

    let navigate = useNavigate();

    const exploreVacants = () => {
			console.log("HOLA WE :D")
		};

    return (
        <>
            <img src={Logo} alt="Pibe Logo" />
            <Button
                label='Explorar vacantes'
                style={{ color: 'white' }}
                onClick={exploreVacants}
                className='p-button-text p-button-plain mx-2'
            />
            <Button
                label='Preguntas frecuentes'
                style={{ color: 'white' }}
                className='p-button-text p-button-plain mx-2'
            />
            <Button
                label='Nosotros'
                style={{ color: 'white' }}
                className='p-button-text p-button-plain mx-2'
            />
        </>
    )
}