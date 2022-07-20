import React from 'react';
import { Divider } from 'primereact/divider';

export const CardDataEnd = () => {
	return(
		<div className="card">
		
		<div className="grid">
			<div className="col-5 flex align-items-center justify-content-center">
			<div className="container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">Certificaciones:</div>
					
					<div className="text-base text-justify mt-2 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Project Management .
					</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Certified Information .
					</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Microsoft Certified .
					</div>	
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Solutions Developer.
					</div>
				</div>
			</div>
			</div>
			<div className="col-2">
				<Divider layout="vertical">
				</Divider>
			</div>
			<div className="col-5 flex align-items-center justify-content-center">

		 <div className="container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">Habilidades:</div>
					<div className="text-base text-justify mt-2 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Trabajo en Equipo.
					</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Iniciativa.
					</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Liderazgo.
					</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Manejo de idiomas.
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
	)
}