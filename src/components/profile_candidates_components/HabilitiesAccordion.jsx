import { useState } from 'react';
import { Chips } from 'primereact/chips';
import { useStoreHabilities } from '../../storage/profile_zustand/ZustandHabilities';
import { useEffect } from 'react';

export const HabilitiesAccordion = () => {
	const { habilities, setHabilities } = useStoreHabilities();

	return (
		<div className='grid'>
			<div className='col'>
				<Chips
					value={habilities}
					placeholder="Tus habilidades y conocimientos"
					onChange={(e) => setHabilities(e.value)}
				/>
				
			</div>
		</div>
	);
};
