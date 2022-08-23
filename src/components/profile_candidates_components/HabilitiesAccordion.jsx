import { useState } from 'react';
import { Chips } from 'primereact/chips';
import { useStoreHabilities } from '../../storage/profile_zustand/ZustandHabilities';
import { useEffect } from 'react';

export const HabilitiesAccordion = () => {
	const { habilities, setHabilities } = useStoreHabilities();

	return (
		<div className='grid'>
			<div className='col'>
				<span className='p-float-label w-full'>
					<Chips
						id='in'
						value={habilities}
						onChange={(e) => setHabilities(e.value)}
					/>
					<label htmlFor='in'>Conocimientos y Habilidades</label>
				</span>
			</div>
		</div>
	);
};
