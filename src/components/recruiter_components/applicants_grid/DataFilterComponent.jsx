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
		<div className='col-12 md:col-8 md:col-offset-2 card p-2 bg-white border-round-md shadow-4'>
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
