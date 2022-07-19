import { Menubar } from 'primereact/menubar';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

export const DataFilterComponent = () => {
	const [selectedProcess, setSelectedProcess] = useState(null);
	const process = [
		{ name: 'Postulado' },
		{ name: 'CV Visto' },
		{ name: 'Entrevista' },
		{ name: 'Idóneo' },
		{ name: 'Contratado' },
	];

	const onCountyChange = (e) => {
		setSelectedProcess(e.value);
	};

	return (
		<Menubar
			className='w-full mx-2 shadow-3 bg-white'
			start={
				<div className='flex align-items-center flex-wrap mr-2'>
					<span class='ml-2 text-pink-300 text-4xl material-icons'>groups_3</span>{' '}
					<h2 className='ml-3 text-blue-700'>Lista de candidatos</h2>
				</div>
			}
			end={
				<div className='flex align-items-center flex-wrap mr-2'>
					<span class='mr-3 text-blue-700 text-4xl material-icons'>filter_list</span>{' '}
					<Dropdown
						className='w-10rem'
						style={{ backgroundColor: '#EAF3FB' }}
						value={selectedProcess}
						options={process}
						onChange={onCountyChange}
						optionLabel='name'
						placeholder='Filtrar por proceso'
					/>
				</div>
			}
		/>
	);
};
