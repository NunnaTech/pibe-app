import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { useStoreVacantDetail } from '../../../storage/VacantDetailZustand';


export const RightCardDetail = ({obj,applyToVacant}) => {

	const {setDialog} = useStoreVacantDetail()

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
					<div className="text-base font-light text-600 flex justify-content-center">{obj.profile.firstName} {obj.profile.secondName}</div>
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 flex justify-content-center">Correo Electrónico</div>
					<div className="text-base font-light text-600 flex justify-content-center">{obj.email}</div>
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="text-base font-bold mt-2 flex justify-content-center">Número Teléfonico</div>
					<div className="text-base font-light text-600 flex justify-content-center">{obj.profile.phoneNumber}</div>
				</div>
			</div>

			<div className="grid container mt-2">
				<div className="col-12 md:col-12 lg:col-12 flex justify-content-center">
					<Button label="Aplicar" onClick={applyToVacant} className="mr-2 p-button-plain bg-primary hover:bg-primary-600" aria-label="Submit"/>
					<Button label="Compartir" onClick={()=>setDialog(true)} className="p-button-plain bg-pink-400 hover:bg-pink-500"  aria-label="Submit"/>
				</div>
			</div>

		</Card>
	)
}