import { InputTextarea } from 'primereact/inputtextarea';

export const DescriptionAccordion = () => {
	return (
		<div className='grid'>
			<div className='col flex justify-content-center'>
				<InputTextarea
					placeholder='Ingresa pequeña descripción sobre ti'
					className='w-full h-max'
				/>
			</div>
		</div>
	);
};
