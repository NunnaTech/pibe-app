import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate, useParams } from 'react-router-dom';
import { TemplatecvService } from '../../../services/TemplatecvService';
import { useStoreSession } from '../../../storage/LoginZustand';


export const CVCardData = ({ data }) => {

	const { token, userSession } = useStoreSession();
	const serviceTemplate = new TemplatecvService();
	let navigate = useNavigate();
	const goToTemplate = () => {
		navigate(`/profile/cv/${data.id}`);
	};


	const header = (
		<img
			alt='Card'
			className='border-round-top-md'
			src={data.url}
			onError={(e) => (e.target.src = 'https://picsum.photos/418/120/?blur')}
		/>
	);

	const footer = (
		<div
			className='w-full'>
			<Button
				style={{ color: 'white' }}
				icon={<span className='material-icons mr-2'>done</span>}
				className='w-full mb-2 p-button-rounded bg-teal-500'
				label='Seleccionar'
			/>

			<Button
				style={{ color: 'white' }}
				icon={<span className='material-icons'>visibility</span>}
				className='w-full p-button-rounded p-button-info '
				label='Ver'
				onClick={goToTemplate}
			/>
		</div>
	);

	return (
		<Card
			title={data.name}
			className='w-auto shadow-3 hover:shadow-6'
			footer={footer}
			header={header}>
			<div className='text-base font-light text-700	'>{data.details}</div>
		</Card>
	);
};
