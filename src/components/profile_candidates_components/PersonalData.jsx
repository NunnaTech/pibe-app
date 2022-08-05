import { InputText } from 'primereact/inputtext';
import { useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { useStoreGeneralProfile } from '../../storage/profile_zustand/ZustandGlobalProfile';
import { ProfileService } from '../../services/ProfileService';
import { useEffect } from 'react';
import { useStoreSession } from '../../storage/LoginZustand';

export const PersonalData = () => {
	// API Services
	let profileService = new ProfileService();
	//Zustand
	const { token, userSession } = useStoreSession();
	const {
		republicStates,
		setRepublicStates,
		profile,
		setValuesProfile,
		email,
		setEmailValue,
		flag,
		setFlag,
		setProfile
	} = useStoreGeneralProfile();
	// Toast
	const toast = useRef(null);

	const updateProfile = () => {
		profileService
			.saveProfile(userSession.username, profile, token)
			.then((res) => res.json())
			.then((data) => {
				toast.current.show({
					severity: 'success',
					summary: 'Exito',
					detail:
						'Tus datos se actualizaron correctamente, cierre sesión para ver sus cambios.',
					sticky: true,
				});
			})
			.catch((error) => {
				console.log(error);
				toast.current.show({
					severity: 'error',
					summary: 'Advertencia',
					detail: 'Ocurrio un error al guardar los datos',
					sticky: true,
				});
				setTimeout(() => {
					setFlag(false);
				}, 2000);
			});
	};

	useEffect(() => {
		profileService
			.getAllRepublicStates(token)
			.then((response) => response.json())
			.then((result) => {
				setRepublicStates(result);
			});

		setEmailValue(userSession.email);

		if (userSession.profile) {
			profileService.getProfileUser(token,userSession.username)
				.then((response)=> response.json())
				.then((result) => {
					setProfile(result)
				})
				.catch((error)=>{
					console.log(error);
				})
		}
	}, []);

	return (
		<div>
			<Toast ref={toast} />
			<div className='grid container flex justify-content-center mt-2'>
				<img
					className='w-2 h-2 shadow-4 border-circle'
					src='https://avatars.dicebear.com/api/personas/FranciscaMiltomsd.svg'
				/>
			</div>
			<div className='grid container mt-4 flex justify-content-center'>
				<span className='p-float-label'>
					<InputText
						id='in'
						value={profile.name}
						onChange={(e) => setValuesProfile('name', e.target.value)}
						className='w-auto m-1'
					/>
					<label htmlFor='in'>Nombre(s)</label>
				</span>
				<span className='p-float-label'>
					<InputText
						id='in'
						value={profile.firstName}
						onChange={(e) => setValuesProfile('firstName', e.target.value)}
						className='w-auto m-1'
					/>
					<label htmlFor='in'>Apellido Paterno</label>
				</span>
				<span className='p-float-label'>
					<InputText
						id='in'
						value={profile.secondName}
						onChange={(e) => setValuesProfile('secondName', e.target.value)}
						className='w-auto m-1'
					/>
					<label htmlFor='in'>Apellido Materno</label>
				</span>
			</div>

			<div className='grid container mt-3 flex justify-content-center'>
				<span className='p-float-label'>
					<InputText
						id='in'
						value={email}
						onChange={(e) => setEmailValue(e.target.value)}
						className='w-auto m-1'
					/>
					<label htmlFor='in'>Correo Electronico</label>
				</span>
				<span className='p-float-label'>
					<InputText
						id='in'
						value={profile.phoneNumber}
						onChange={(e) => setValuesProfile('phoneNumber', e.target.value)}
						className='w-auto m-1'
					/>
					<label htmlFor='in'>Teléfono</label>
				</span>
				<span className='p-float-label'>
					<InputText
						id='in'
						style={{ width: 250 }}
						type='date'
						value={profile.birthDate}
						onChange={(e) => setValuesProfile('birthDate', e.target.value)}
						className='m-1'
					/>
					<label htmlFor='in'>Fecha Nacimiento</label>
				</span>
			</div>

			<div className='grid container mt-3 flex justify-content-center'>
				<span className='p-float-label'>
					<Dropdown
						value={profile.state}
						options={republicStates}
						style={{ width: 255 }}
						onChange={(e) => setValuesProfile('state', e.value)}
						optionLabel='name'
						className='m-1'
					/>
					<label htmlFor='in'>Estado</label>
				</span>
			</div>

			<div className='grid container mt-3 mr-2 flex justify-content-end'>
				<Button
					label='Guardar'
					disabled={flag}
					onClick={updateProfile}
					icon={<span className='material-icons mr-2'>save</span>}
					className='p-button-plain'
					style={{ background: '#F763B6' }}
					aria-label='Submit'
				/>
			</div>
		</div>
	);
};