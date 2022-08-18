import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { classNames } from 'primereact/utils';
import { ValidationService } from '../../../services/ValidationService';
import React, { useEffect } from 'react';

export const TitleAndDescription = ({
	vacant,
	setVacant,
	setBtnDisabled,
	btnDisabled,
}) => {
	const vs = new ValidationService();
	useEffect(() => {
		if (
			(vacant.title && vacant.description) ||
			(vacant.title !== '' && vacant.description !== '')
		) {
			setBtnDisabled(btnDisabled && false);
		} else {
			setBtnDisabled(true);
		}
	}, [vacant]);

	return (
		<div className='grid p-fluid'>
			<div className='field col-12'>
				<div className='p-inputgroup'>
					<span className='material-icons p-inputgroup-addon'>title</span>
					<span className='p-float-label'>
						<InputText
							id='inputgroup'
							type='text'
							className={classNames({ 'p-invalid': vacant.title === '' })}
							value={vacant.title}
							onChange={(e) =>
								setVacant({
									...vacant,
									title: vs.validate('NAMES', e.target.value),
								})
							}
						/>
						<label htmlFor='inputgroup'>Título</label>
					</span>
				</div>
				{vacant.title === '' && (
					<small className='p-error'>Campo obligatorio</small>
				)}
			</div>

			<div className='field col-12'>
				<div className='p-inputgroup'>
					<span className='material-icons p-inputgroup-addon'>article</span>
					<span className='p-float-label'>
						<InputTextarea
							id='inputgroup'
							className={classNames({ 'p-invalid': vacant.description === '' })}
							value={vacant.description}
							onChange={(e) =>
								setVacant({
									...vacant,
									description: vs.validate('TEXT', e.target.value),
								})
							}
						/>
						<label htmlFor='inputgroup'>Descripción</label>
					</span>
				</div>
				{vacant.description === '' && (
					<small className='p-error'>Campo obligatorio</small>
				)}
			</div>
		</div>
	);
};
