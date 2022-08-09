import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';


export const RightCardDetail = () => {
  return(
		<Card className="sm:w-auto md:w-4 lg:w-4 h-auto shadow-4 m-5">

			<div className="grid container">
				<div className="col-12 md:col-12 lg:col-12 flex justify-content-center">
						<img className="w-4 h-4 shadow-4 border-circle" src="https://avatars.dicebear.com/api/personas/FranciscaMiltomsd.svg"/>
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 flex justify-content-center">Reclutador</div>
					<div className="text-base font-light text-600 flex justify-content-center">Fernando Quintanilla Lopez</div>
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 flex justify-content-center">Puesto</div>
					<div className="text-base font-light text-600 flex justify-content-center">Ingeniero en desarrollo de software</div>
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 flex justify-content-center">Correo Electrónico</div>
					<div className="text-base font-light text-600 flex justify-content-center">fernandoQuin@adn.mx</div>
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 flex justify-content-center">Número Teléfonico</div>
					<div className="text-base font-light text-600 flex justify-content-center">7771309865</div>
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-12 md:col-12 lg:col-12 flex justify-content-center">
					<Button label="Aplicar" className="mr-2 p-button-plain" style={{background:"#F763B6"}} aria-label="Submit"/>
					<Button label="Compartir" className="p-button-plain" style={{background:"#2557A7"}} aria-label="Submit"/>
				</div>
			</div>

		</Card>
	)
}