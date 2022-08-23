import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import Logo from "../../resources/static/img/logo.svg"
export const LeftContent = () => {
    let navigate = useNavigate();
    return (
        <>
            <img src={Logo} alt="Pibe Logo" className="ml-2 mr-2" onClick={()=>navigate("/")}/>
          <Button
            label='EXPLORAR VACANTES'
            onClick={()=>navigate("/all-vacants")}
            icon={
              <span
                style={{ marginRight: 5 }}
                className='material-icons'>
						work
					</span>
            }
            iconPos='left'
            style={{ color: 'white' }}
            className='p-button-text p-button-plain ml-4'
          />
        </>
    )
}