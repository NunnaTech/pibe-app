import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {useStoreLogin,useStoreSession} from '../../storage/LoginZustand';
import { useNavigate } from "react-router-dom";
import {LoginService} from '../../services/LoginService';
import { useRef } from 'react';
import { Toast } from 'primereact/toast';

const LeftContent = () => {
	let navigate = useNavigate();
	const {addUserSession,addToken} = useStoreSession();
	const {username,password,disabled,setDisabledButton,setUserName,setPasswordUser,} = useStoreLogin();
	const loginService = new LoginService();
	const toast = useRef(null);

	const startSession = () => {
		setDisabledButton(true)
		loginService.loginUser(username,password)
			.then(res => res.json())
			.then(data => {
				addToken(data.token)
				addUserSession(data.user)
				if (data.user.authorities[0].authority==="ROLE_RECRUITER")
					navigate("/recruiter")
				else
					navigate("/candidate")
			})
			.catch(error => {
				toast.current.show({severity:'warn', summary: 'Advertencia', detail:'Datos invalidos del usuario', sticky: true})
				setTimeout(() => {
					setDisabledButton(false)
				}, 2000);
			})
	}

	return (
		<div className='p-5'>
			<Toast ref={toast} />
			<div className='font-bold text-3xl'>Iniciar sesión</div>
			<div className='font-light'>Descubre nuevas oportunidades de trabajo</div>
			<span className='p-float-label mt-5'>
    		<InputText id='a' className="w-full" value={username} onChange={(e) => setUserName(e.target.value)} />
				<label htmlFor='a'>Correo Electronico</label>
			</span>
			<span className='p-float-label mt-3'>
    		<InputText id='in' type="password" className="w-full" value={password}
									 onChange={(e) => setPasswordUser(e.target.value)} />
				<label htmlFor='in'>Contraseña</label>
			</span>
			<div className="flex flex-column">
				<div
					className="flex align-items-center justify-content-center mt-4">
					<Button label="Iniciar sesión" onClick={startSession} disabled={disabled}/>
				</div>
				<div
					className="flex align-items-center justify-content-center mt-2">
					<Button label="¿Olvidaste tu contraseña?" className="p-button-text" />
				</div>
			</div>
		</div>
	);
};

export default LeftContent;