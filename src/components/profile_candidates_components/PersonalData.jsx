import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { Button } from 'primereact/button';

export const PersonalData = () => {
	const [selectedCounty, setSelectedCounty] = useState(null);
	const [value5, setValue5] = useState(null);
	const counties = [
		{ name: 'Morelos' },
		{ name: 'Ciudad de México' },
		{ name: 'Veracruz' },
		{ name: 'Nuevo León' },
		{ name: 'Puebla' },
	];

	const onCountyChange = (e) => {
		setSelectedCounty(e.value);
	};

	return (
		<div>

			<div className='grid container flex justify-content-center mt-2'>
				<img className='w-2 h-2 shadow-4 border-circle'
						 src='https://avatars.dicebear.com/api/personas/FranciscaMiltomsd.svg' />
			</div>

			<div className='grid container mt-4 flex justify-content-center'>
			<span className='p-float-label'>
						<InputText id='in' className='w-auto' className='w-auto m-1' />
						<label htmlFor='in'>Nombre(s)</label>
					</span>
				<span className='p-float-label'>
						<InputText id='in' className='w-auto' className='w-auto m-1' />
						<label htmlFor='in'>Apellido Paterno</label>
					</span>
				<span className='p-float-label'>
						<InputText id='in' className='w-auto' className='w-auto m-1' />
						<label htmlFor='in'>Apellido Materno</label>
					</span>
			</div>

			<div className='grid container mt-3 flex justify-content-center'>
				<span className='p-float-label'>
						<InputText id='in' className='w-auto m-1' />
						<label htmlFor='in'>Correo Electronico</label>
				</span>
				<span className='p-float-label'>
						<InputText id='in' className='w-auto m-1' />
						<label htmlFor='in'>Teléfono</label>
				</span>
				<span className='p-float-label'>
						<InputText id='in' className='w-auto'
											 className='w-auto m-1' />
						<label htmlFor='in'>Apellido Materno</label>
				</span>
			</div>

			<div className='grid container mt-3 flex justify-content-center'>
				<span className='p-float-label'>
						 <Calendar id='calendar' dateFormat='dd-mm-yy' className='m-1' value={value5}
											 onChange={(e) => setValue5(e.value)} />
						<label htmlFor='calendar'>Fecha Nacimiento</label>
					</span>
				<span className='p-float-label'>
						<Dropdown value={selectedCounty} options={counties}
											style={{ width: 220 }}
											onChange={onCountyChange} optionLabel='name' className='m-1' />
						<label htmlFor='in'>Estado</label>
					</span>
			</div>

			<div className='grid container mt-3 flex justify-content-end'>
				<Button label='Guardar' icon={<span className='material-icons mr-2'>save</span>} className='p-button-plain'
								style={{ background: '#F763B6' }} aria-label='Submit' />
			</div>

		</div>
	);
};