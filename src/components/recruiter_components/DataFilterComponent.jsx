import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

export const DataFilterComponent = () => {
	const [selectedCounty, setSelectedCounty] = useState(null);
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
		<Menubar
			className='w-full mx-2 shadow-3 bg-white'
			start={
				<span className='p-input-icon-left mr-8'>
					<i className='pi pi-search' />
					<InputText
						style={{ backgroundColor: '#EAF3FB' }}
						placeholder='Buscar'
						type='text'
					/>
				</span>
			}
			end={
				<Dropdown
					className='ml-8'
					style={{ backgroundColor: '#EAF3FB' }}
					value={selectedCounty}
					options={counties}
					onChange={onCountyChange}
					optionLabel='name'
					placeholder='Seleccione un estado'
				/>
			}
		/>
	);
};
