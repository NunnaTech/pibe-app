import { Dropdown } from 'primereact/dropdown';


export const DetailsVacant = () => {
	return (
		<div>
			<h5 className='mt-0 text-pink-400 text-base'>Detalles de vacante</h5>
			<div className='grid p-fluid'>
				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span class='material-icons p-inputgroup-addon'>schedule</span>
						<span className='p-float-label'>
							<span className='p-float-label'>
								<Dropdown
									inputId='dropdown'
									optionLabel='name'
								/>
								<label htmlFor='dropdown'>Horario</label>
							</span>
						</span>
					</div>
				</div>
				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span class='material-icons p-inputgroup-addon'>
							currency_exchange
						</span>
						<span className='p-float-label'>
							<span className='p-float-label'>
								<Dropdown
									inputId='dropdown'
									optionLabel='name'
								/>
								<label htmlFor='dropdown'>Periodo</label>
							</span>
						</span>
					</div>
				</div>
			</div>
			<div className='grid p-fluid'>
				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span class='material-icons p-inputgroup-addon'>work</span>
						<span className='p-float-label'>
							<span className='p-float-label'>
								<Dropdown
									inputId='dropdown'
									optionLabel='name'
								/>
								<label htmlFor='dropdown'>Modo</label>
							</span>
						</span>
					</div>
				</div>

				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span class='material-icons p-inputgroup-addon'>apartment</span>
						<span className='p-float-label'>
							<span className='p-float-label'>
								<Dropdown
									inputId='dropdown'
									optionLabel='name'
								/>
								<label htmlFor='dropdown'>Estado</label>
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
