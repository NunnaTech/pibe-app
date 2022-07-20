import React from 'react';
import { Divider } from 'primereact/divider';

export const CardDataMid = () => {
	return(
		<div className="card">
		
		<div className="grid">
			<div className="col-5 flex align-items-center justify-content-center">
			<div className="container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">Idiomas:</div>
					
					<div className="text-base text-justify mt-2 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Ingles: Avanzado.
					</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Español: Basico.
					</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Frances: Intermedio.
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
					<div className="text-base font-bold mt-2 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">Cursos:</div>
					<div className="text-base text-justify mt-2 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Java.
					</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• PHP.
					</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Kotlin.
					</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
						• Cisco.
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
	)
}