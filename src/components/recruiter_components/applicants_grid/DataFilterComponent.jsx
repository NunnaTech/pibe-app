import React, { useEffect } from 'react';
import { InputText } from 'primereact/inputtext';

export const DataFilterComponent = ({
	wordFiltering,
	setWordFiltering,
	filteringData,
}) => {
	useEffect(() => {
		filteringData(wordFiltering);
	}, [wordFiltering]);

	return (
		<div className='card p-4 bg-white w-full md:w-10 border-round-md shadow-4 mx-3 '>
			<span className='p-input-icon-left w-full'>
				<i className='pi pi-search' />
				<InputText
					className='bg-white w-full'
					value={wordFiltering}
					placeholder='Puedes bucar por nombre o proceso actual'
					type='text'
					onChange={(e) => setWordFiltering(e.target.value)}
				/>
			</span>
		</div>
	);
};
