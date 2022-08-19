import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import  Template1 from '../../img/Template1.png'

export const CVCardData = () => {

	const header = (
		<img alt="Card" className="border-round-top-md h-23rem" src={Template1}
				 onError={(e) => e.target.src='https://picsum.photos/418/120/?blur'} />
	);

	const footer = (
		<span>
			<Button style={{color:"white"}} icon={<span className="material-icons">done</span>}
							className="p-button-rounded p-button-text p-button-plain text-blue-600 mr-2"  />
			<Button style={{color:"white"}} icon={<span className="material-icons">visibility</span>}
							className="p-button-rounded p-button-text p-button-plain text-blue-600 mr-2"  />
		</span>
	);

	return(
		<Card title="Crisp" className="w-auto shadow-3 hover:shadow-6  " footer={footer} header={header}>
			<div className="text-base font-light text-700	">Currículum Vitae #1 </div>
			<div className="text-base font-light text-700	">Azul</div>
		</Card>
	)
}