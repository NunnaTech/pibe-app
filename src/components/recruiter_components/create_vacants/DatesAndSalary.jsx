import { InputSwitch } from 'primereact/inputswitch';
import { InputText } from 'primereact/inputtext';
import React from 'react';

export const DatesAndSalary = ({ vacant, setVacant }) => {
	let today = new Date();
	let month = today.getMonth();

	let minDate = new Date();
	minDate.setMonth(month);
	return (
		<div>
			<div className='grid p-fluid'>
				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span className='material-icons p-inputgroup-addon'>today</span>
						<span className='p-float-label'>
							<InputText
								id='calendar'
								type='date'
								value={vacant.startDate.split('T')[0]}
								onChange={(e) =>
									setVacant({
										...vacant,
										startDate: `${e.target.value}T00:00:00`,
									})
								}
							/>
							<label htmlFor='calendar'>Fecha inicio</label>
						</span>
					</div>
				</div>
				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span className='material-icons p-inputgroup-addon'>event</span>
						<span className='p-float-label'>
							<InputText
								id='calendar'
								type='date'
								value={vacant.endDate.split('T')[0]}
								onChange={(e) =>
									setVacant({ ...vacant, endDate: `${e.target.value}T00:00:00` })
								}
							/>
							<label htmlFor='calendar'>Fecha fin</label>
						</span>
					</div>
				</div>
			</div>
			<div className='grid p-fluid'>
				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span className='material-icons p-inputgroup-addon'>
							account_balance_wallet
						</span>
						<span className='p-float-label'>
							<InputText
								id='inputgroup'
								type='number'
								value={vacant.salary}
								onChange={(e) =>
									setVacant({ ...vacant, salary: e.target.value })
								}
							/>
							<label htmlFor='in'>Salario</label>
						</span>
					</div>
				</div>

				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup flex justify-content-center flex align-content-center'>
						<h5 className='mt-4 text-base text-gray-600'>¿Vacante pública?</h5>
						<InputSwitch
							className='mt-4 ml-4'
							checked={vacant.public}
							onChange={(e) => setVacant({ ...vacant, public: e.target.value })}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
