import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { useStoreVacantDetail } from '../../../storage/VacantDetailZustand';
import React from 'react';


export const DialogContacts = () => {

	const {dialog,setDialog, contacts} = useStoreVacantDetail()

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
							<div className="card grid shadow-4 border-round flex p-2" key={index}>
								<div className="font-bold flex m-2 align-content-center flex-wrap justify-content-center">
									<Avatar label={obj.contact.username[0].toUpperCase()} className="mr-2 bg-primary" shape="circle" />
								</div>
								<div className="font-bold flex m-1 align-content-center flex-wrap justify-content-center">
									Nombre: <div className="ml-2 font-light">{obj.contact.username}</div>
								</div>
								<div className="flex align-content-center m-1 flex-wrap justify-content-center">
									<Button style={{color:"white"}} icon={<span className="material-icons">share</span>}
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