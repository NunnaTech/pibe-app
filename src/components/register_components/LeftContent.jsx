import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { useState } from 'react';


const LeftContent = () => {
	const [value,setValue] = useState()
	const [password,setPassword] = useState()
	const [type, setType] = useState(null);
	return (
		<div className='p-5'>
			<div className='font-bold text-3xl'>Registrarse</div>
			<div className='font-light'>Saca el máximo partido a tu vida profesional</div>
			<span className='p-float-label mt-5'>
    		<InputText id='in' className="w-full" value={value} onChange={(e) => setValue(e.target.value)} />
				<label htmlFor='in'>Correo Electronico</label>
			</span>
			<span className='p-float-label mt-3'>
    		<InputText id='in' className="w-full" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<label htmlFor='in'>Contraseña</label>
			</span>
			<div className="flex flex-column">
				<div
					className="flex align-items-center justify-content-center mt-4">
					<div className="field-radiobutton">
						<RadioButton inputId="city1" name="city" value="Reclutador" onChange={(e) => setType(e.value)} checked={type === 'Reclutador'}  />
						<label htmlFor="city1">Soy reclutador</label>
					</div>
					<div className="field-radiobutton ml-4">
						<RadioButton inputId="city1" name="city" value="Candidato" onChange={(e) => setType(e.value)} checked={type === 'Candidato'}/>
						<label htmlFor="city1">Soy candidato</label>
					</div>
				</div>
				<div
					className="flex align-items-center justify-content-center mt-2">
					<Button label="Iniciar sesión" style={{background:"#F763B6"}}/>
				</div>
			</div>
		</div>
	);
};

export default LeftContent;