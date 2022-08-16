import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { useStoreHomeCandidates } from '../../../storage/HomeCandidateZustand';
import { Link, useNavigate } from 'react-router-dom';
import { CardContent } from '../../recruiter_components/recluiter_vacants/CardContent';

export const CardData = ({obj}) => {
	let navigate = useNavigate()

	const {option} = useStoreHomeCandidates()

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
						onError={(e) => e.target.src='https://picsum.photos/418/120/?blur'}
						src={obj.image}
						width={'100%'}
						height={'100%'}
						className='object-fit border-round-sm'
					/>
				</div>
			</div>
		</div>
	);

	return (
		<Card
			onClick={() => navigate(`/vacant/${obj.id}`)}
			title={title}
			className='w-25rem m-5 shadow-3 hover:shadow-6'
			header={header}>
			<CardContent obj={obj} />
		</Card>
	);
}


/*
*
* <Card onClick={() => navigate(`/vacant/${obj.id}`)} title={option.id == 3  ? <Badge severity="warning" className="text-xl" value={obj.title}></Badge>: <>{obj.title}</>} className="w-auto m-5 shadow-3 hover:shadow-6" header={header}>
			<div className="text-base font-light text-700">Salario: {obj.salary}</div>
			<div className="text-base font-light text-700	mt-1">Vigente: {new Date(obj.endDate).toLocaleDateString('fr-CA')}</div>
			<div className="text-base font-light text-700	mt-1">Modalidad: {option.id == 2  ? <Badge className="text-base" value={obj.mode.name}></Badge>: <>{obj.mode.name}</>}</div>
			<div className="text-base font-light text-700	mt-1">Estado: {option.id == 1  ? <Badge severity="success" className="text-base" value={obj.state.name}></Badge>: <>{obj.state.name}</>}</div>
		</Card>
*
* */