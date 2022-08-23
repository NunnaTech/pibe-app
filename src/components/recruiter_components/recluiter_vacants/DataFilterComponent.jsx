import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from 'react';
import { useStoreHomeCandidates } from '../../../storage/HomeCandidateZustand';

export const DataFilterComponent = ({ filtering }) => {
	const { optionsMenu, option, setOption, filteringWord, setFilteringWord } =
		useStoreHomeCandidates();

	useEffect(() => {
		filtering(filteringWord);
	}, [filteringWord]);

	return (
		<div className='card p-4 bg-white w-full md:w-10 border-round-md shadow-4 mx-3 '>
			<div>
				<p className='mt-2 p-0 text-xl text-gray-700'>Selecciona por que quieres filtrar</p>
			</div>
			<div className='grid'>
				<div className='col-12 md:col-6'>
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
				<div className='col-12 md:col-6'>
					<span className='p-input-icon-left w-full'>
						<i className='pi pi-search' />
						<InputText
							style={{ backgroundColor: '#EAF3FB' }}
							className='bg-white w-full'
							onChange={(e) => {
								setFilteringWord(e.target.value);
							}}
							placeholder='Buscar'
							type='text'
						/>
					</span>
				</div>
			</div>
		</div>
	);
};
