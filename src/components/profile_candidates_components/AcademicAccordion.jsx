import { InputText } from 'primereact/inputtext';

export const AcademicAccordion = () => {
	return (
		<div className='grid'>
			<div className='col flex'>
				<InputText
					id='in'
					placeholder='DB Administrator'
					className='w-full h-max'
				/>
			</div>
		</div>
	);
};
