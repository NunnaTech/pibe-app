import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { useState } from 'react';
import Google from '../../img/Google.svg';



const LeftContent = () => {
	const [value,setValue] = useState()
	const [password,setPassword] = useState()

	return (
		<div className='p-5'>
			<div className='font-bold text-3xl'>Iniciar sesión</div>
			<div className='font-light'>Descubre nuevas oportunidades de trabajo</div>
			<span className='p-float-label mt-5'>
    		<InputText id='in' className="w-full" value={value} onChange={(e) => setValue(e.target.value)} />
				<label htmlFor='in'>Correo Electronico</label>
			</span>
			<span className='p-float-label mt-3'>
    		<InputText id='in' className="w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
				<label htmlFor='in'>Contraseña</label>
			</span>
			<div className="flex flex-column">
				<div
					className="flex align-items-center justify-content-center mt-4">
					<Button label="Iniciar sesión" />
				</div>
				<div
					className="flex align-items-center justify-content-center mt-2">
					<Button label="¿Olvidaste tu contraseña?" className="p-button-text" />
				</div>
			</div>
			<Divider align="center" type="dashed">
				<b>o</b>
			</Divider>
			<div className="flex flex-column">
				<div
					className="flex align-items-center justify-content-center">
					<Button label="Iniciar sesión con Google" className="p-button-text" icon={
						<img className="mr-2" src={Google}/>
					}/>
				</div>
			</div>
		</div>
	);
};

export default LeftContent;