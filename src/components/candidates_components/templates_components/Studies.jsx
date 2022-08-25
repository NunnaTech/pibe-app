import DateService from '../../../services/DateService';

export const Studies = ({ resume, color }) => {
	return (
		<>
			<div className=' px-5 m-0 md:m-5'>
				<div class='card '>
					<div class='flex flex-wrap align-items-center mt-3 justify-content-center card-container blue-container'>
						<div
							class={`min-w-full border-round ${color}  text-white font-bold p-1 flex align-items-center text-left`}>
							Estudios:
						</div>
					</div>

					<div className='grid container '>
						<div className='col-4  justify-content-center'>
							<div className='text-base font-bold mt-2 flex justify-content-center'>
								Nombre
							</div>
							{resume.studies.map((r, i) => {
								return (
									<div className='text-base font-light text-600 flex justify-content-center'>
										{r.name}
									</div>
								);
							})}
						</div>

						<div className='col-4 md:col-4 lg:col-4 justify-content-center'>
							<div className='text-base font-bold mt-2 flex justify-content-center'>
								Inicio
							</div>
							{resume.studies.map((r, i) => {
								return (
									<div className='text-base font-light text-600 flex justify-content-center'>
										{DateService.parseToDate(r.startPeriod)}
									</div>
								);
							})}
						</div>
						<div className='col-4 md:col-4 lg:col-4'>
							<div className='text-base font-bold mt-2 flex justify-content-center'>
								Fin
							</div>
							{resume.studies.map((r, i) => {
								return (
									<div className='text-base font-light text-600 flex justify-content-center'>
										{DateService.parseToDate(r.endPeriod)}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
