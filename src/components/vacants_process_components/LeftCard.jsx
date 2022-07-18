import { Card } from 'primereact/card';
import React from 'react';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';

export const LeftCard = () => {
	const items = [
		{
			label: 'Postulado',
		},
		{
			label: 'CV Visto',
		},
		{
			label: 'Entrevista',
		},
		{
			label: 'Idóneo',
		},
		{
			label: 'Contratado',
		}
	];

	return(
		<Card className="h-full w-full p-3">

			<div className="grid mr-4 ml-4">
				<div className="sm:col-12 md:col-8 flex justify-content-start">
					<div>
						<div className="text-2xl font-bold">PHP Developer</div>
						<div className="text-sm font-light text-600">$5,300 - $10,300 Mensual</div>
					</div>
				</div>
				<div className="sm:col-12 md:col-4 flex justify-content-end">
					<div>
						<Button label="Regresar" className="p-button-raised p-button-secondary" />
					</div>
				</div>
			</div>

			<div className="grid mr-4 ml-4 mt-3">
				<div className="sm:col-12 md:col-4 flex justify-content-center">
					<div>
						<div className="text-lg font-bold flex justify-content-center">Modalidad</div>
						<div className="text-sm font-light text-600 flex justify-content-center">$5,300 - $10,300 Mensual</div>
					</div>
				</div>
				<div className="sm:col-12 md:col-4 flex justify-content-center">
					<div>
						<div className="text-lg font-bold flex justify-content-center">PHP Developer</div>
						<div className="text-sm font-light text-600 flex justify-content-center">$5,300 - $10,300 Mensual</div>
					</div>
				</div>
				<div className="sm:col-12 md:col-4 flex justify-content-center">
					<div>
						<div className="text-lg font-bold flex justify-content-center">PHP Developer</div>
						<div className="text-sm font-light text-600 flex justify-content-center">$5,300 - $10,300 Mensual</div>
					</div>
				</div>
			</div>

			<div className="grid mr-4 ml-4 mt-3">
				<div className="col-12 flex justify-content-center">
					<div className="text-2xl font-bold flex justify-content-center">Tu proceso de seguimiento</div>
				</div>
			</div>

			<div className="grid mr-4 ml-4 mt-3">
					{items.map((obj,index) => {
						return(
							<div className="col flex justify-content-center">
							<div
								className="border-circle w-2rem h-2rem m-2 bg-blue-700 text-white font-bold
								flex align-items-center justify-content-center">
								{index+1}
							</div>
							</div>
						)
					})}
			</div>
			<div className="grid mr-4 ml-4">
				{items.map((obj,index) => {
					return(
						<div className="col flex justify-content-center">
							<div
								className="text-sm flex align-items-center justify-content-center">
								{obj.label}
							</div>
						</div>
					)
				})}
			</div>

		</Card>
	)
}