import { Card } from 'primereact/card';
import React from 'react';
import { Button } from 'primereact/button';

export const RightCard = () => {
	return(
		<Card className="h-full w-full">
			<div className="grid mr-6 ml-6">
				<div className="col-12 flex justify-content-center">

						<img className="w-6 h-6 shadow-4 border-circle" src="https://avatars.dicebear.com/api/personas/FranciscaMiltomsd.svg"/>

				</div>
			</div>

			<div className="grid mr-6 ml-6 mt-2">
				<div className="col-12 flex justify-content-center">
					<div>
						<div className="text-2xl font-bold flex justify-content-center">Reclutador</div>
						<div className="text-sm font-light text-600 flex justify-content-center">Fernando Quintanilla Lopez</div>
					</div>
				</div>
			</div>

			<div className="grid mr-6 ml-6 mt-2">
				<div className="col-12 flex justify-content-center">
					<div>
						<div className="text-2xl font-bold flex justify-content-center">Puesto</div>
						<div className="text-sm font-light text-600 flex justify-content-center">Ingeniero en desarrollo de software</div>
					</div>
				</div>
			</div>

			<div className="grid mr-6 ml-6 mt-2">
				<div className="col-12 flex justify-content-center">
					<div>
						<div className="text-2xl font-bold flex justify-content-center">Correo Electronico</div>
						<div className="text-sm font-light text-600 flex justify-content-center">fernandoQuin@adn.mx</div>
					</div>
				</div>
			</div>

			<div className="grid mr-6 ml-6 mt-2">
				<div className="col-12 flex justify-content-center">
					<div>
						<div className="text-2xl font-bold flex justify-content-center">Número Teléfonico</div>
						<div className="text-sm font-light text-600 flex justify-content-center">7771309865</div>
					</div>
				</div>
			</div>


		</Card>
	)
}