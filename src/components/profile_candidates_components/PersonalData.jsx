import { InputText } from 'primereact/inputtext';
import { useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { useStoreGeneralProfile } from '../../storage/profile_zustand/ZustandGlobalProfile';
import { ProfileService } from '../../services/ProfileService';
import DateService from '../../services/DateService';
import { useEffect } from 'react';
import { useStoreSession } from '../../storage/LoginZustand';
import _ from 'lodash';

export const PersonalData = () => {
	let profileService = new ProfileService();
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
		setProfile,
	} = useStoreGeneralProfile();
	// Toast
	const toast = useRef(null);

	const afterUpdate = () =>{
		profileService
			.getProfileUser(token, userSession.username)
			.then((response) => response.json())
			.then((result) => {
				setProfile(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const partialUpdateProfile = () => {
		let flagSend = false
		toast.current.show({
			severity: 'info',
			summary: 'Información',
			detail:
				'Sus datos estan siendo guardados, espere un momento por favor.',
			sticky: true,
		});

		Object.entries(profile).forEach(([key, value]) => {
			if (_.isEmpty(value) && key != "completed" && key != "id"){
				flagSend = true
			}
		});

		if (_.isEmpty(email)){
			flagSend = true
		}

		if (!flagSend){
			setValuesProfile('birthDate',DateService.parseToDate(profile.birthDate))
			setValuesProfile('image', `https://avatars.dicebear.com/api/initials/${userSession.username}.svg`)
			profileService.updateProfile(token,userSession.username,profile)
				.then((res)=>{
					switch (res.status) {
						case 200:
							toast.current.show({
								severity: 'success',
								summary: 'Exito',
								detail: '¡Listo!, tus datos se han actualizado correctamente.',
								sticky: true,
							});
							break;
						case 403:
							toast.current.show({
								severity: 'warn',
								summary: 'Atención',
								detail: 'No cuentas con los permisos suficientes para hacer esta acción.',
								sticky: true,
							});
							break;
						case 404:
							toast.current.show({
								severity: 'error',
								summary: 'Advertencia',
								detail: 'Ocurrio un error al guardar los datos.',
								sticky: true,
							});
							break;
					}
				})
				.catch((error)=>{
					console.log(error)
				})
		}else{
			toast.current.show({
				severity: 'warn',
				summary: 'Atención',
				detail: 'Verifique que sus datos sean correctos o esten completos.',
				sticky: true,
			});
		}
	}

	const updateProfile = () => {
		let flagFirst = false
		toast.current.show({
			severity: 'info',
			summary: 'Información',
			detail:
				'Sus datos estan siendo guardados, espere un momento por favor.',
			sticky: true,
		});
		Object.entries(profile).forEach(([key, value]) => {
			if (_.isEmpty(value) && key != "completed" && key != "id"){
				flagFirst = true
			}
		});
		if (_.isEmpty(email)){
			flagFirst = true
		}

		if (!flagFirst){
			profileService
				.saveProfile(userSession.username, profile, token)
				.then((res) => {
					switch (res.status) {
						case 200:
							toast.current.show({
								severity: 'success',
								summary: 'Exito',
								detail: '¡Listo!, tus datos se han actualizado correctamente. Reinice su sesión para ver sus cambios.',
								sticky: true,
							});
							afterUpdate()
							break;
						case 403:
							toast.current.show({
								severity: 'warn',
								summary: 'Atención',
								detail: 'No cuentas con los permisos suficientes para hacer esta acción.',
								sticky: true,
							});
							break;
						case 404:
							toast.current.show({
								severity: 'info',
								summary: 'Mensaje de información',
								detail: '¡Revise que todos sus datos sean correctos!',
								sticky: true,
							});
							break;
					}
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
		}else{
			toast.current.show({
				severity: 'warn',
				summary: 'Atención',
				detail: 'Verifique que sus datos sean correctos o esten completos.',
				sticky: true,
			});
		}
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
			profileService
				.getProfileUser(token, userSession.username)
				.then((response) => response.json())
				.then((result) => {
					setProfile(result);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, []);

	return (
		<div>
			<Toast ref={toast} />
			<div className='grid container flex justify-content-center mt-2'>
				<img
					className='w-2 h-2 shadow-4 border-circle'
					src={`https://avatars.dicebear.com/api/initials/${userSession.username}.svg`}
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
						defaultValue="2000-01-01"
						value={_.isEmpty(profile.birthDate) ? "0000-00-00":DateService.parseToDate(profile.birthDate)}
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
					onClick={()=>{
						if (userSession.profile){
							partialUpdateProfile()
						}else{
							updateProfile()
						}
					}}
					icon={<span className='material-icons mr-2'>save</span>}
					className='p-button-plain'
					style={{ background: '#F763B6' }}
					aria-label='Submit'
				/>
			</div>
		</div>
	);
};
