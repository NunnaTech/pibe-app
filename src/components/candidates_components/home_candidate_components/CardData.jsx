import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export const CardData = ({obj}) => {

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
		<Card title={obj.title} className="w-auto m-5 shadow-3 hover:shadow-6" footer={footer} header={header}>
			<div className="text-base font-light text-700	">Salario: {obj.salary}</div>
			<div className="text-base font-light text-700	">Vigente: 10/06/2022</div>
			<div className="text-base font-light text-700	">Modalidad: {obj.mode.name}</div>
			<div className="text-base font-light text-700	">Estado: {obj.state.name}</div>
		</Card>
	)
}