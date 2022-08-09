import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from 'react';
import { useStoreHomeCandidates } from '../../../storage/HomeCandidateZustand';
import { HomeCandidateService } from '../../../services/HomeCandidateService';
import { useStoreSession } from '../../../storage/LoginZustand';

export const DataFilterComponent = ({filtering}) => {
	const {optionsMenu,option,setOption,filteringWord,setFilteringWord} = useStoreHomeCandidates()

	useEffect(()=>{
		filtering(filteringWord)
	},[filteringWord])

	return (
		<div className="grid card p-2 bg-white w-auto h-auto border-round-md shadow-4 mr-3 ml-3">
			<div className="sm:col-12 md:col">
				<span className='p-input-icon-left'>
					<i className='pi pi-search' />
					<InputText
						style={{ backgroundColor: '#EAF3FB' }}
						className="bg-white w-full"
						onChange={(e) => {setFilteringWord(e.target.value)}}
						placeholder='Buscar'
						type='text'
					/>
				</span>
			</div>
			<div className="sm:col-12 md:col">
				<Dropdown
					style={{ backgroundColor: '#EAF3FB' }}
					value={option}
					options={optionsMenu}
					onChange={(e) => setOption(e.value)}
					optionLabel='name'
					className="bg-white w-full"
					placeholder='Seleccione un estado'
				/>
			</div>
		</div>
	);
};
