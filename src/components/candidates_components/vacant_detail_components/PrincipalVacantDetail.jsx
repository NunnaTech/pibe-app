import { Card } from 'primereact/card';
import { LeftCardDetail } from './LeftCardDetail';
import { RightCardDetail } from './RightCardDetail';
import { NavBarApp } from '../../navbar/NavBarApp';
import { useParams } from 'react-router-dom';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useStoreSession } from '../../../storage/LoginZustand';
import { useStoreVacantDetail } from '../../../storage/VacantDetailZustand';
import { VacantDetailService } from '../../../services/VacantDetailService';
import { useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { DialogContacts } from './DialogContacts';

export const PrincipalVacantDetail = () => {
	// Controlled Hooks
	const toast = useRef(null);
	// Router Params
	let params = useParams()
	// Zustand States
	const {token,userSession} = useStoreSession()
	const {vacant,setVacant, creator,setCreator, contacts,setContacts} = useStoreVacantDetail()
	// API Services
	const vacantService = new VacantDetailService()
	// Functions
	const applyToVacant = () => {
	  vacantService.SaveToApplicantVacant(params.vacantId, userSession.username, token)
			.then((res)=>{
				console.log(res.status)
				switch (res.status) {
					case 200:
						toast.current.show({
							severity: 'success',
							summary: 'Exito',
							detail: '¡Listo!, haz aplicado a esta vacante correctamente',
							sticky: true,
						});
						break;
					case 403:
						toast.current.show({
							severity: 'warn',
							summary: 'Atención',
							detail: 'No cuentas con los permisos suficientes para hacer esta acción',
							sticky: true,
						});
						break;
					case 404:
						toast.current.show({
							severity: 'info',
							summary: 'Mensaje de información',
							detail: '¡Ya haz aplicado para esta vacante!',
							sticky: true,
						});
						break;
				}
			})
			.catch((error)=>{
				toast.current.show({
					severity: 'error',
					summary: 'Error de la aplicación',
					detail: 'A ocurrio un error en el servidor',
					sticky: true,
				});
			})
	}

	const saveFavorite = () => {
		vacantService.SaveFavoriteVacant(userSession.username, params.vacantId,token)
			.then((res)=>{
				switch (res.status) {
					case 201:
						toast.current.show({
							severity: 'success',
							summary: 'Exito',
							detail: 'Se añadio correctamente a tus vacantes favoritas',
							sticky: true,
						});
						break;
					case 403:
						toast.current.show({
							severity: 'warn',
							summary: 'Atención',
							detail: 'No cuentas con los permisos suficientes para hacer esta acción',
							sticky: true,
						});
						break;
					case 404:
						toast.current.show({
							severity: 'info',
							summary: 'Mensaje de información',
							detail: '¡Esta vacante ya esta en tu lista de favoritos!',
							sticky: true,
						});
						break;
				}
			})
			.catch((error)=>{
				toast.current.show({
					severity: 'error',
					summary: 'Error de la aplicación',
					detail: 'A ocurrio un error en el servidor',
					sticky: true,
				});
			})
	}

	useEffect(()=>{
		console.log(contacts)
	}, [contacts])

	useEffect(()=>{
		setVacant(null)
		vacantService.GetInfoVacant(params.vacantId, token)
			.then((res) => res.json())
			.then((data) => {
				setVacant(data)
				vacantService.GetCreatorVacant(data.creator.username,token)
					.then((res) => res.json())
					.then((data)=>{
						setCreator(data)
						vacantService.GetAllUserContacts(userSession.username, token)
							.then((res) => res.json())
							.then((data) =>{
								setContacts(data)
							})
					})
					.catch((error)=>{
						console.log(error)
					})
			})
			.catch((error)=>{
				console.log(error)
			})
	},[])

  return(
		<div className='h-max' >
			<NavBarApp />
			<Toast ref={toast} />
			<div className="flex justify-content-center flex-wrap card-container pt-2">
				{vacant!=null && creator!=null && contacts!=null ?
					<>
						<DialogContacts/>
					<LeftCardDetail obj={vacant} saveFavorite={saveFavorite}/>
					<RightCardDetail obj={creator} applyToVacant={applyToVacant}/>
					</>
					:
					<>
					<div className='justify-content-center font-bold text-xl'>
						<ProgressSpinner />
					</div>
				</>
				}
			</div>

		</div>
	)
}
