import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { useStoreVacantDetail } from '../../../storage/VacantDetailZustand';
import React, { useRef } from 'react';
import { VacantDetailService } from '../../../services/VacantDetailService';
import { useStoreSession } from '../../../storage/LoginZustand';
import { Toast } from 'primereact/toast';


export const DialogContacts = () => {
	// Controlled Hooks
	const toast = useRef(null);
	// Zustand
	const {dialog,setDialog, contacts,vacant} = useStoreVacantDetail()
	const {token,userSession} = useStoreSession()
	// API Service
	const vacantService = new VacantDetailService()

	const sharedVacant = (forUser) => {
	  vacantService.SharedVacant(token,userSession.username,forUser,vacant.id)
			.then((res) =>{
				switch (res.status) {
					case 200:
						toast.current.show({
							severity: 'success',
							summary: 'Exito',
							detail: '¡Haz compartido esta vacante exitosamente!',
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
							detail: '¡Esta vacante ya la haz compartido con este usuario!',
							sticky: true,
						});
						break;
				}
			})
			.catch((error)=>{
				console.log(error)
			})
	}

	const renderFooter = () => {
		return (
			<div>
				<Button
					label='Cerrar'
					onClick={() => setDialog(false)}
					className='p-button-text'
				/>
			</div>
		);
	};

	return (
		<>
			<Toast ref={toast} />
			<Dialog
				header="Lista de contactos"
				closable={false}
				draggable={false}
				visible={dialog}
				style={{ width: '50vw' }}
				footer={renderFooter}>
				<div className="grid m-4">
					{contacts.map((obj,index)=>{
						return(
							<div className="card grid shadow-4 border-round flex p-2 m-1" key={index}>
								<div className="font-bold flex m-2 align-content-center flex-wrap justify-content-center">
									<Avatar label={obj.contact.username[0].toUpperCase()} className="mr-2 bg-primary" shape="circle" />
								</div>
								<div className="font-bold flex m-1 align-content-center flex-wrap justify-content-center">
									Nombre: <div className="ml-2 font-light">{obj.contact.username}</div>
								</div>
								<div className="flex align-content-center m-1 flex-wrap justify-content-center">
									<Button onClick={()=>sharedVacant(obj.contact.username)} style={{color:"white"}} icon={<span className="material-icons">share</span>}
													className="p-button-rounded p-button-sm p-button-text p-button-plain text-blue-600" aria-label="Profile" />
								</div>
							</div>
						)
					})}
				</div>
			</Dialog>
		</>
	);
}