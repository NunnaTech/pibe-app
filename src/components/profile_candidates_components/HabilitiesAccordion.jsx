import { useState } from 'react';
import { Chips } from 'primereact/chips';
import { useStoreHabilities } from '../../zustand/profile_zustand/ZustandHabilities';

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
