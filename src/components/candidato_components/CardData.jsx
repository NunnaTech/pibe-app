import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export const CardData = () => {

	const header = (
		<img alt="Card" className="border-round-top-md" src="images/usercard.png"
				 onError={(e) => e.target.src='https://picsum.photos/418/120'} />
	);

	const footer = (
		<span>
			<Button label="Detalles" className="p-button-text p-button-plain text-blue-600 mr-2" />
			<Button label="Compartir" className="p-button-text p-button-plain text-blue-600" />
		</span>
	);

	return(
		<Card title="PHP Developer" className="w-auto" footer={footer} header={header}>
			<div className="text-base font-light text-700	">ADN40 Inc.</div>
			<div className="text-base font-light text-700	">$5,300 - $10,300 Mensual</div>
			<div className="text-base font-light text-700	">Vigente: 10/06/2022</div>
		</Card>
	)
}