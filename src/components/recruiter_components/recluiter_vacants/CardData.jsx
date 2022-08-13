import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import DateService from '../../../services/DateService';
import { Link } from 'react-router-dom';

export const CardData = ({ obj }) => {
	const header = (
		<img
			alt='Card'
			className='border-round-top-md'
			src={obj.image}
			onError={(e) =>
				(e.target.src = 'https://picsum.photos/id/2/418/120/?blur')
			}
		/>
	);

	const footer = (
		<Link
			to={{ pathname: `/vacant/${obj.id}/${obj.title}/candidates`, query: {} }}
			style={{ textDecoration: 'none' }}>
			<Button
				icon={<span className='material-icons mr-2'>group</span>}
				className='p-button-rounded p-button-text p-button-plain text-blue-600 mr-2'
				label='Ver postulantes'
			/>
		</Link>
	);

	return (
		<Card
			title={obj.title}
			className='w-auto m-5 shadow-3 hover:shadow-6'
			footer={footer}
			header={header}>
			<div className='text-base font-light text-700'>
				Salario: {obj.salary}
				<br />
				Vigente: {DateService.parseToDate(obj.endDate)}
				<br />
				Modalidad: {obj.mode.name}
				<br />
				Estado: {obj.state.name}
			</div>
		</Card>
	);
};
