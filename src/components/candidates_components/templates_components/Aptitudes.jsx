import _ from 'lodash';

export const Aptitudes = ({ resume, color }) => {
	return (
		<>
			<div className=' px-5 m-0 md:m-5'>
				<div class='card '>
					<div class='flex flex-wrap align-items-center mt-3 justify-content-center card-container blue-container'>
						<div
							class={`min-w-full border-round ${color}  text-white font-bold p-1 flex align-items-center text-left`}>
							Habilidades:
						</div>
					</div>
					<div className='grid container '>
						<div className='col-12 '>
							{_.size(resume.aptitudes)>0 ? (
								<>
									{resume.aptitudes.map((r, i) => {
										return (
											<div className='text-base text-justify mt-2 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3'>
												• {r.name}
											</div>
										);
									})}
								</>
							):(
								<div className="flex justify-content-center text-color-secondary">
									Sin datos.
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
