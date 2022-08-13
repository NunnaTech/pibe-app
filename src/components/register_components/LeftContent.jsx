import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useRef } from 'react';
import { RadioButton } from 'primereact/radiobutton';
import { useStoreRegister } from '../../storage/RegisterZustand';
import { Toast } from 'primereact/toast';
import { RegisterService } from '../../services/RegisterService';

const LeftContent = () => {
	const registerService = new RegisterService();
	const toast = useRef(null);
	const {
		username,
		password,
		email,
		role,
		disabled,
		setPasswordUser,
		setUserName,
		setRole,
		setEmail,
		setDisabledButton,
		cleanAllData,
	} = useStoreRegister();

	const register = () => {
		setDisabledButton(true);
		registerService
			.RegisterUser(username, email, password, role)
			.then((data) => {
				let severity = '';
				let summary = '';
				let detail = '';
				switch (data.status) {
					case 200:
						severity = 'success';
						summary = 'Exito';
						detail = 'El registro de los datos se hizo correctamente';
						break;
					case 403:
						severity = 'warn';
						summary = 'Atención';
						detail =
							'No cuentas con los permisos suficientes para hacer esta acción';
						break;
					case 404 || 505:
						severity = 'error';
						summary = 'Error de la aplicación';
						detail = 'A ocurrio un error en el servidor';
						break;
					default:
						break;
				}
				toast.current.show({
					severity: severity,
					summary: summary,
					detail: detail,
					sticky: true,
				});
				cleanAllData();
				setDisabledButton(false);
			})
			.catch((error) => {
				console.log(error);
				toast.current.show({
					severity: 'warn',
					summary: 'Advertencia',
					detail: 'Datos invalidos del usuario',
					sticky: true,
				});
				setTimeout(() => {
					cleanAllData()
					setDisabledButton(false);
				}, 2000);
			});
	};

	return (
		<div className='p-5'>
			<Toast ref={toast} />
			<div className='font-bold text-3xl'>Registrarse</div>
			<div className='font-light'>
				Saca el máximo partido a tu vida profesional
			</div>
			<span className='p-float-label mt-5'>
				<InputText
					id='in'
					className='w-full'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor='in'>Correo Electronico</label>
			</span>
			<span className='p-float-label mt-3'>
				<InputText
					id='in'
					className='w-full'
					value={username}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<label htmlFor='in'>Nombre de usuario</label>
			</span>
			<span className='p-float-label mt-3'>
				<InputText
					id='in'
					className='w-full'
					type='password'
					value={password}
					onChange={(e) => setPasswordUser(e.target.value)}
				/>
				<label htmlFor='in'>Contraseña</label>
			</span>
			<div className='flex flex-column'>
				<div className='flex align-items-center justify-content-center mt-4'>
					<div className='field-radiobutton'>
						<RadioButton
							inputId='city1'
							name='city'
							value={1}
							onChange={(e) => setRole(e.value)}
							checked={role === 1}
						/>
						<label htmlFor='city1'>Soy reclutador</label>
					</div>
					<div className='field-radiobutton ml-4'>
						<RadioButton
							inputId='city1'
							name='city'
							value={2}
							onChange={(e) => setRole(e.value)}
							checked={role === 2}
						/>
						<label htmlFor='city1'>Soy candidato</label>
					</div>
				</div>
				<div className='flex align-items-center justify-content-center mt-2'>
					<Button
						label='Registrarse'
						disabled={disabled}
						onClick={register}
						style={{ background: '#F763B6' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default LeftContent;
