import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { PaginatorData } from '../paginator_data/PaginatorData';


export const MainContentNoty = () => {
  return(
		<div className="grid m-8">
			<div className="col-12 flex justify-content-center">
				<Card className="sm:w-full md:w-8 h-full">

					<div className="grid ml-3 mr-6">
						<div className="col flex justify-content-start">
							<div className="text-lg font-bold">TUS NOTIFICACIONES</div>
						</div>
					</div>

					<div className="grid ml-3 mr-3">
						<Divider />
					</div>

					{[...Array(5).keys()].map((obj,i)=>{
						return(
							<div className="grid bg-gray-200 border-round-xl ml-6 mr-6 mt-1">
								<div className="flex justify-content-center col p-3">
									<span className="material-icons text-pink-400 text-5xl">circle_notifications</span>
									<div className="text-base ml-2 mt-2">Te haz postulado al PHP developer...</div>
								</div>
							</div>
						)
					})}

					<div className="grid ml-3 mr-3 mt-1">
						<Divider />
					</div>

					<div className="grid ml-3 mr-3 mt-1 ">
						<div className="col flex justify-content-center">
							<PaginatorData/>
						</div>
					</div>
				</Card>
			</div>
		</div>
	)
}