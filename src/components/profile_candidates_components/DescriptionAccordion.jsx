import { InputTextarea } from 'primereact/inputtextarea';
import { useStoreResumeOthers } from '../../storage/profile_zustand/ZustandOther';

export const DescriptionAccordion = () => {
	// Zustand States
	const { description, setDescription } = useStoreResumeOthers();

	return (
		<div className='grid'>
			<div className='col flex justify-content-center'>
				<span className='p-float-label w-full'>
					<InputTextarea
						value={description}
						defaultValue=""
						onChange={(e) => setDescription(e.target.value)}
						placeholder='Ingresa pequeña descripción sobre ti'
						className='w-full h-max'
					/>
					<label htmlFor='in'>Descripción</label>
				</span>
			</div>
		</div>
	);
};

/*
*
* <span className='p-float-label w-full'>
					<label htmlFor='in'>Titúlo Academico</label>
				</span>
*
* */
