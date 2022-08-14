import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useRef, useState } from 'react';

export const TitleAndDescription = ({ vacant, setVacant }) => {
	return (
		<div className='grid p-fluid'>
			<div className='field col-12'>
				<div className='p-inputgroup'>
					<span className='material-icons p-inputgroup-addon'>title</span>
					<span className='p-float-label'>
						<InputText
							id='inputgroup'
							type='text'
							value={vacant.title}
							onChange={(e) => setVacant({ ...vacant, title: e.target.value })}
						/>
						<label htmlFor='inputgroup'>Titulo</label>
					</span>
				</div>
			</div>

			<div className='field col-12'>
				<div className='p-inputgroup'>
					<span className='material-icons p-inputgroup-addon'>article</span>
					<span className='p-float-label'>
						<InputTextarea
							autoResize='false'
							id='inputgroup'
							rows={2}
							value={vacant.description}
							onChange={(e) =>
								setVacant({ ...vacant, description: e.target.value })
							}
						/>
						<label htmlFor='inputgroup'>Descripción</label>
					</span>
				</div>
			</div>
		</div>
	);
};
