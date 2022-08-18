import React, { useRef } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { CardContent } from './CardContent';
import { VacantService } from '../../../services/VacantService';
import { useStoreSession } from '../../../storage/LoginZustand';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';

export const CardData = ({ obj, getAllVacants }) => {
	let vacantService = new VacantService();
	const { token } = useStoreSession();
	const toast = useRef(null);

	const confirm = (event) => {
		confirmPopup({
			target: event.currentTarget,
			message: '¿Estás seguro de eliminar la vacante?',
			icon: 'pi pi-exclamation-triangle',
			acceptLabel: 'Si',
			accept,
		});
	};

	const accept = () => {
		vacantService.DeleteVacant(token, obj.id).then(() => {
			getAllVacants();
			toast.current.show({
				severity: 'success',
				summary: 'Vacante eliminada',
				detail: 'Ya no se mostrará la vacante en la lista',
				life: 3000,
			});
		});
	};

	const title = (
		<div>
			<p className='text-gray-600 text-center m-0 p-0'>{obj.title}</p>
		</div>
	);
	const header = (
		<div className='card '>
			<div className='card-container green-container overflow-hidden'>
				<div className='flex justify-content-center h-10rem'>
					<img
						alt='Imagen de vacante'
						src={obj.image}
						width={'100%'}
						height={'100%'}
						className='object-fit border-round-top-sm'
					/>
				</div>
			</div>
		</div>
	);
	const footer = (
		<div className='flex justify-content-around flex-wrap'>
			<Link
				to={{
					pathname: `/vacant/${obj.id}/${obj.title}/candidates`,
					query: {},
				}}
				style={{ textDecoration: 'none' }}>
				<Button
					icon={<span className='material-icons mr-2'>group</span>}
					className='p-button-rounded p-button-text p-button-plain text-primary mr-2'
					label='Ver postulantes'
				/>
			</Link>
			<Link
				to={{
					pathname: `/edit-vacant/${obj.id}`,
					query: {},
				}}
				style={{ textDecoration: 'none' }}>
				<Button
					icon={<span className='material-icons mr-2'>edit</span>}
					className='p-button-rounded p-button-text p-button-plain text-pink-400 mr-2'
					label='Editar vacante'
				/>
			</Link>

			<Button
				icon={<span className='material-icons mr-2'>delete</span>}
				className='p-button-danger p-button-plain my-4'
				label='Eliminar vacante'
				onClick={confirm}
			/>
		</div>
	);

	return (
		<>
			<ConfirmPopup />
			<Toast ref={toast} />
			<Card
				title={title}
				className='w-25rem m-5 shadow-3 hover:shadow-6'
				footer={footer}
				header={header}>
				<CardContent obj={obj} />
			</Card>
		</>
	);
};
