import { InputTextarea } from 'primereact/inputtextarea';
import { useStoreResumeOthers } from '../../storage/profile_zustand/ZustandOther';

export const DescriptionAccordion = () => {
	// Zustand States
	const {description,setDescription} = useStoreResumeOthers()

	return (
		<div className='grid'>
			<div className='col flex justify-content-center'>
				<InputTextarea
					value={description}
					onChange={(e)=>setDescription(e.target.value)}
					placeholder='Ingresa pequeña descripción sobre ti'
					className='w-full h-max'
				/>
			</div>
		</div>
	);
};
