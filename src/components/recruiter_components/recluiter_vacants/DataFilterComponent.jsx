import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from 'react';
import { useStoreHomeCandidates } from '../../../storage/HomeCandidateZustand';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const DataFilterComponent = ({ filtering }) => {

	const navigate = useNavigate()

	const { optionsMenu, option, setOption, filteringWord, setFilteringWord } =
		useStoreHomeCandidates();

	useEffect(() => {
		filtering(filteringWord);
	}, [filteringWord]);

	return (
		<div className='grid card p-2 bg-white w-auto h-auto border-round-md shadow-4 mx-3'>
			<div className='flex sm:col-12 md:col'>
			<Button
					label='Añadir vacante'
					icon='pi pi-plus'
					className='mr-2 '
					onClick={() => navigate('/add-vacant')}
				/>
				<span className='p-input-icon-left'>
					<i className='pi pi-search' />
					<InputText
						style={{ backgroundColor: '#EAF3FB' }}
						className='bg-white '
						onChange={(e) => {
							setFilteringWord(e.target.value);
						}}
						placeholder='Buscar'
						type='text'
					/>
				</span>				
			</div>
			<div className='sm:col-12 md:col-4 mt-3 md:mt-0'>
				<Dropdown
					style={{ backgroundColor: '#EAF3FB' }}
					value={option}
					options={optionsMenu}
					onChange={(e) => setOption(e.value)}
					optionLabel='name'
					className='bg-white w-full'
					placeholder='Seleccione un estado'
				/>
			</div>
		</div>
	);
};
