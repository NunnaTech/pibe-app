import { InputText } from 'primereact/inputtext';
import { useStoreResumeOthers } from '../../storage/profile_zustand/ZustandOther';

export const AcademicAccordion = () => {
	//Zustand States
	const {academic,setAcademic} = useStoreResumeOthers()

	return (
		<div className='grid'>
			<div className='col flex'>
				<InputText
					id='in'
					value={academic}
					onChange={(e)=>setAcademic(e.target.value)}
					placeholder='DB Administrator'
					className='w-full h-max'
				/>
			</div>
		</div>
	);
};
