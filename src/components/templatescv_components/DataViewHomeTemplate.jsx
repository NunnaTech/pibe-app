
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { CardDataEnd } from './CardDataEnd';
import { CardDataMid } from './CardDataMid';
import { CardDataFirts } from './CardDataFirts';

export const DataViewHomeTemplate = () => {
	return (
		<>
			<Card className="sm:w-auto md:w-6 lg:w-6 h-auto shadow-4 m-5">

				<div className="grid container">

					<div className="col-3 md:col-3 lg:col-3">
						<div className="flex justify-content-center">
							<img className="w-12 h-12     shadow-4 border-circle" src="https://i.imgur.com/qDg8x1P.png" />

						</div>

						<div className=" text-base font-light text-600 mt-2 md:ml-3 lg:ml-3">ING. Tecnologico de la Información</div>
					</div>
					<div >
						<div className="text-2xl mt-5 font-bold md:ml-4 lg:ml-4">JUAN MANUEL MARTINEZ CARRILLO</div>

						<div class="card ">
							<div class="flex flex-wrap align-items-center mt-3 justify-content-center card-container blue-container">

								<div class="min-w-full border-round bg-blue-500 text-white font-bold p-1 flex align-items-center justify-content-center"></div>

							</div>
						</div>
            <div className="grid container mt-2">
				<div className="col-4 md:col-4 lg:col-4">
					<div className="text-base font-bold mt-2 flex justify-content-center">
          <Button style={{ color: "white" }} icon={<span className="material-icons ">call</span>}
									className="p-button-rounded p-button-help p-button-plain  " />
          </div>
					<div className="text-base font-light text-600 flex justify-content-center mt-2 ">777-10-777-32</div>
				</div>
				<div className="col-4 md:col-4 lg:col-4 justify-content-center">
					<div className="text-base font-bold mt-2 flex justify-content-center"><Button style={{ color: "white" }} icon={<span className="material-icons ">mail</span>}
									className="p-button-rounded p-button-help p-button-plain" /></div>
					<div className="text-base font-light text-600 flex justify-content-center mt-2 ">juan@utez.edu.mx</div>
				</div>
				<div className="col-4 md:col-4 lg:col-4">
        <div className="text-base font-bold mt-2 flex justify-content-center">
           <Button  style={{ color: "white" }} icon={<span className="material-icons ">my_location</span>}
									className="p-button-rounded p-button-help p-button-plain mr-2 " /></div>
       
					<div className="text-base font-light text-600 flex justify-content-center mt-2 ">Cuernavaca</div>
				</div>
			</div>
					</div>

				</div>

				<div className="grid container mt-2">
					<div className="col-12 md:col-12 lg:col-12">
						<div className="text-base font-bold mt-2 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">Resumen:</div>
						<div className="text-base text-justify mt- font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
					</div>
				</div>
				<div>
					<CardDataFirts />
				</div>
				<div>
					<CardDataMid />
				</div>
				<div>
					<CardDataEnd />
				</div>
			</Card>
		</>
	)
}