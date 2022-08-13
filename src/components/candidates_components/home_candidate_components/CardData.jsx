import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { useStoreHomeCandidates } from '../../../storage/HomeCandidateZustand';
import { useNavigate } from 'react-router-dom';

export const CardData = ({obj}) => {
	let navigate = useNavigate()

	const {option} = useStoreHomeCandidates()

	const header = (
		<img alt="Card" className="border-round-top-md" src="images/usercard.png"
				 onError={(e) => e.target.src='https://picsum.photos/id/2/418/120/?blur'} />
	);

	const footer = (
		<span>
			<Button style={{color:"white"}} icon={<span className="material-icons">favorite</span>}
							className="p-button-rounded p-button-text p-button-plain text-blue-600 mr-2" aria-label="Profile" />
			<Button style={{color:"white"}} icon={<span className="material-icons">share</span>}
							className="p-button-rounded p-button-text p-button-plain text-blue-600 mr-2" aria-label="Profile" />
		</span>
	);

	return(
		<Card onClick={() => navigate(`/vacant/${obj.id}`)} title={option.id == 3  ? <Badge severity="warning" className="text-xl" value={obj.title}></Badge>: <>{obj.title}</>} className="w-auto m-5 shadow-3 hover:shadow-6" header={header}>
			<div className="text-base font-light text-700">Salario: {obj.salary}</div>
			<div className="text-base font-light text-700	mt-1">Vigente: {new Date(obj.endDate).toLocaleDateString('fr-CA')}</div>
			<div className="text-base font-light text-700	mt-1">Modalidad: {option.id == 2  ? <Badge className="text-base" value={obj.mode.name}></Badge>: <>{obj.mode.name}</>}</div>
			<div className="text-base font-light text-700	mt-1">Estado: {option.id == 1  ? <Badge severity="success" className="text-base" value={obj.state.name}></Badge>: <>{obj.state.name}</>}</div>
		</Card>
	)
}