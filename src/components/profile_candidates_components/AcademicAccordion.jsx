import { InputText } from 'primereact/inputtext';
import { useStoreResumeOthers } from '../../storage/profile_zustand/ZustandOther';

export const AcademicAccordion = () => {
	//Zustand States
	const {academic,setAcademic} = useStoreResumeOthers()

	return (
		<div className='grid'>
			<div className='col flex'>
				<span className='p-float-label w-full'>
					<InputText
						id='in'
						value={academic}
						onChange={(e)=>setAcademic(e.target.value)}
						placeholder='DB Administrator'
						className='w-full h-max'
					/>
					<label htmlFor='in'>Titúlo Academico</label>
				</span>
			</div>
		</div>
	);
};
