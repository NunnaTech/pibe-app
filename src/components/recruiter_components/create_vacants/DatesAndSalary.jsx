import { Calendar } from 'primereact/calendar';
import { InputSwitch } from 'primereact/inputswitch';
import { InputNumber } from 'primereact/inputnumber';
import React, { useRef, useState } from 'react';

export const DatesAndSalary = () => {
	const [checked2, setChecked2] = useState(true);

	const [value5, setValue5] = useState(null);
	const [value6, setValue6] = useState(null);

	let today = new Date();
	let month = today.getMonth();

	let minDate = new Date();
	minDate.setMonth(month);
	return (
		<div>
			<div className='grid p-fluid'>
				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span class='material-icons p-inputgroup-addon'>today</span>
						<span className='p-float-label'>
							<Calendar
								showButtonBar
								minDate={minDate}
								id='calendar'
								value={value5}
								onChange={(e) => setValue5(e.value)}
							/>
							<label htmlFor='calendar'>Fecha inicio</label>
						</span>
					</div>
				</div>

				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span class='material-icons p-inputgroup-addon'>event</span>
						<span className='p-float-label'>
							<Calendar
								showButtonBar
								minDate={minDate}
								id='calendar'
								value={value6}
								onChange={(e) => setValue6(e.value)}
							/>
							<label htmlFor='calendar'>Fecha fin</label>
						</span>
					</div>
				</div>
			</div>
			<div className='grid p-fluid'>
				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span class='material-icons p-inputgroup-addon'>
							account_balance_wallet
						</span>
						<InputNumber placeholder='Salario' />
						<span className='p-inputgroup-addon'>$</span>						
					</div>
				</div>

				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup flex justify-content-center flex align-content-center'>
						<h5 className='mt-4 text-base text-gray-600'>¿Vacante pública?</h5>
						<InputSwitch
							className='mt-4 ml-4'
							checked={checked2}
							onChange={(e) => setChecked2(e.value)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
