import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

export const TitleAndDescription = () => {
	return (
		<div className='grid p-fluid'>
			<div className='field col-12'>
				<div className='p-inputgroup'>
					<span class='material-icons p-inputgroup-addon'>title</span>
					<span className='p-float-label'>
						<InputText
							id='inputgroup'
							type='text'
						/>
						<label htmlFor='inputgroup'>Titulo</label>
					</span>
				</div>
			</div>

			<div className='field col-12'>
            <div className='p-inputgroup'>
            <span class='material-icons p-inputgroup-addon'>article</span>
				<span className='p-float-label'>
					<InputTextarea
						autoResize='false'
						id='textarea'
						rows={2}
					/>
					<label htmlFor='textarea'>Descripción</label>
				</span>
                </div>
			</div>
		</div>
	);
};
