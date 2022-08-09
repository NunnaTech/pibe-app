import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export const LeftCardDetail = () => {
  return(
		<Card className="sm:w-auto md:w-6 lg:w-6 h-auto shadow-4 m-5">

			<div className="grid container">
				<div className="col-6 md:col-6 lg:col-6">
					<div className="text-2xl font-bold md:ml-6 lg:ml-6">PHP Developer</div>
					<div className="text-base font-light text-600 mt-2 md:ml-6 lg:ml-6">Vigencia: 22/06/2022</div>
					<div className="text-base font-light text-600 md:ml-6 lg:ml-6">Estado: Puebla</div>
				</div>
				<div className="col-6 md:col-6 lg:col-6 flex justify-content-end">
					<Button style={{color:"white"}} icon={<span className="material-icons m-0">favorite</span>}
									className="p-button-rounded p-button-secondary p-button-plain md:mr-8 lg:mr-8" aria-label="Profile" />
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-4 md:col-4 lg:col-4">
					<div className="text-base font-bold mt-2 flex justify-content-center">Modalidad</div>
					<div className="text-base font-light text-600 flex justify-content-center">Presencial</div>
				</div>
				<div className="col-4 md:col-4 lg:col-4 justify-content-center">
					<div className="text-base font-bold mt-2 flex justify-content-center">Horario</div>
					<div className="text-base font-light text-600 flex justify-content-center">Tiempo Completo</div>
				</div>
				<div className="col-4 md:col-4 lg:col-4">
					<div className="text-base font-bold mt-2 flex justify-content-center">Periodo</div>
					<div className="text-base font-light text-600 flex justify-content-center">Quincena</div>
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 md:ml-6 lg:ml-6 md:mr-6 lg:mr-6">Descripción</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-6 lg:ml-6 md:mr-6 lg:mr-6">
						Somos ADN40, una entidad global con más de 73 millones de clientes, presente en más de 30 países. Trabajamos para ayudar a las personas a tomar las mejores decisiones financieras y poner al alcance de todos las oportunidades de esta nueva era. Nos guían nuestros valores: el cliente es lo primero, pensamos en grande y somos un solo equipo.
					</div>
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 md:ml-6 lg:ml-6 md:mr-6 lg:mr-6">Beneficios</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-6 lg:ml-6 md:mr-6 lg:mr-6">
						• Prestaciones bancarias superiores a las de la ley.
					</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-6 lg:ml-6 md:mr-6 lg:mr-6">
						• Seguro de vida.
					</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-6 lg:ml-6 md:mr-6 lg:mr-6">
						• Vacaciones superiores.
					</div>
				</div>
			</div>

		</Card>
	)
}