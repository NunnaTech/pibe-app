import React from 'react';
import { Divider } from 'primereact/divider';

export const CardDataFirts = () => {
	return(
		<div className="card">
		
		<div className="grid">
			<div className="col-5 flex align-items-center justify-content-center">
            <div className="container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 md:ml-6 lg:ml-6 md:mr-6 lg:mr-6">Experiencia:</div>
                    <div className="justify-content-center ">
                    <div className="text-base font-bold mt-2 flex justify-content-center ">Puesto</div>
					<div className="text-base font-light mt-2 text-600 flex justify-content-center ">Administración del tiempo.</div>
				</div>
                <div className="justify-content-center ">
					<div className="text-base font-bold mt-2 flex justify-content-center">Periodo</div>
					<div className="text-base font-light mt-2 text-600 flex justify-content-center">2020-2021</div>
                    </div>
                    <div className="justify-content-center ">
                    <div className="text-base font-bold mt-2 flex justify-content-center">Actividades:</div>
					<div className="text-base font-light mt-2 text-600 flex justify-content-center md:ml-3 lg:ml-3 md:mr-3 lg:mr-3"> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempo</div>
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
					<div className="text-base font-bold mt-2 md:ml-6 lg:ml-6 md:mr-6 lg:mr-6">Estudios:</div>
                    <div className="justify-content-center ">
                    <div className="text-base font-bold mt-2 flex justify-content-center ">Carrera</div>
					<div className="text-base font-light mt-2 text-600 flex justify-content-center ">Administración del tiempo.</div>
				</div>
                <div className="justify-content-center ">
					<div className="text-base font-bold mt-2 flex justify-content-center">Periodo</div>
					<div className="text-base font-light mt-2 text-600 flex justify-content-center">2020-2021</div>
                    </div>
                    <div className="justify-content-center ">
                    <div className="text-base font-bold mt-2 flex justify-content-center">Nombre:</div>
					<div className="text-base font-light mt-2 text-600 flex justify-content-center md:ml-4 lg:ml-4 md:mr-4 lg:mr-4">Universidad Tecnológica Emiliano Zapata UTEZ</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
	)
}