import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { CardContent } from './CardContent';
import { VacantService } from '../../../services/VacantService';
import { useStoreSession } from '../../../storage/LoginZustand';

export const CardData = ({ obj }) => {
	let vacantService = new VacantService();
	const { token, userSession } = useStoreSession();

	const eliminarVacante = (token, idElemento) => {
		vacantService.DeleteVacant(token, idElemento).then(() => {
			console.log('Vacante eliminada correctamente');
		});
	};

	const title = (
		<div>
			<p className='text-gray-600 text-center m-0 p-0'>{obj.title}</p>
		</div>
	);
	const header = (
		<div class='card '>
			<div class='card-container green-container overflow-hidden'>
				<div class='flex justify-content-center h-10rem'>
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
					pathname: `/vacant/${obj.id}/${obj.title}/candidates`,
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
				onClick={() => eliminarVacante(token, obj.id)}
			/>
		</div>
	);

	return (
		<Card
			title={title}
			className='w-25rem m-5 shadow-3 hover:shadow-6'
			footer={footer}
			header={header}>
			<CardContent obj={obj} />
		</Card>
	);
};
