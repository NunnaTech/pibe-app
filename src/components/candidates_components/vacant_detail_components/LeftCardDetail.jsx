import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export const LeftCardDetail = ({obj,saveFavorite}) => {
  return(
		<Card className="sm:w-auto md:w-6 lg:w-6 h-auto shadow-4 m-5">

			<div className="grid container">
				<div className="col-6 md:col-6 lg:col-6">
					<div className="text-2xl font-bold md:ml-6 lg:ml-6">{obj.title}</div>
					<div className="text-base font-light text-600 mt-2 md:ml-6 lg:ml-6">Vigencia: 22/06/2022</div>
					<div className="text-base font-light text-600 md:ml-6 lg:ml-6">Estado: {obj.state.name}</div>
				</div>
				<div className="col-6 md:col-6 lg:col-6 flex justify-content-end">
					<Button onClick={saveFavorite} style={{color:"white"}} icon={<span className="material-icons m-0">favorite</span>}
									className="p-button-rounded p-button-secondary p-button-plain md:mr-8 lg:mr-8" aria-label="Profile" />
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-4 md:col-4 lg:col-4">
					<div className="text-base font-bold mt-2 flex justify-content-center">Modalidad</div>
					<div className="text-base font-light text-600 flex justify-content-center">{obj.mode.name}</div>
				</div>
				<div className="col-4 md:col-4 lg:col-4 justify-content-center">
					<div className="text-base font-bold mt-2 flex justify-content-center">Horario</div>
					<div className="text-base font-light text-600 flex justify-content-center">{obj.schedule.name}</div>
				</div>
				<div className="col-4 md:col-4 lg:col-4">
					<div className="text-base font-bold mt-2 flex justify-content-center">Periodo</div>
					<div className="text-base font-light text-600 flex justify-content-center">{obj.period.name}</div>
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 md:ml-6 lg:ml-6 md:mr-6 lg:mr-6">Descripción</div>
					<div className="text-base text-justify mt-1 font-light text-600 md:ml-6 lg:ml-6 md:mr-6 lg:mr-6">
						{obj.description}
					</div>
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 md:ml-6 lg:ml-6 md:mr-6 lg:mr-6">Beneficios</div>
					{obj.benefits.map((o,index)=>{
						return(
							<div key={index} className="text-base text-justify mt-1 font-light text-600 md:ml-6 lg:ml-6 md:mr-6 lg:mr-6">
								• {o.name}
							</div>
						)
					})}
				</div>
			</div>

		</Card>
	)
}