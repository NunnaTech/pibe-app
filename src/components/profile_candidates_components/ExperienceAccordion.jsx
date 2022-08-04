import { Button } from 'primereact/button';
import { useStoreExperience } from '../../storage/profile_zustand/ZustandExperience';
import { InputText } from 'primereact/inputtext';
import { useEffect } from 'react';
import { Calendar } from 'primereact/calendar';

export const ExperienceAccordion = () => {
	const { formInput, updateFormInput, addForm, deleteForm } =
		useStoreExperience();

	useEffect(() => {
		if (formInput.length == 0) {
			addForm();
			deleteForm(1);
		}
	}, []);

	return (
		<div>
			{formInput.map((o, i) => {
				return (
					<div
						key={i}
						className='grid'>
						<div className='col'>
							<InputText
								id='in'
								value={o.position}
								onChange={(e) => {
									updateFormInput('position', i, e.target.value);
								}}
								placeholder='Empresa'
								className='w-full'
							/>
						</div>
						<div className='col'>
							<InputText
								id='in'
								value={o.activities}
								onChange={(e) => {
									updateFormInput('activities', i, e.target.value);
								}}
								placeholder='Puesto'
								className='w-full'
							/>
						</div>
						<div className='col'>
							<Calendar
								id='basic'
								placeholder='Fecha Inicio'
								value={o.startPeriod}
								onChange={(e) => {
									updateFormInput('startPeriod', i, e.target.value);
								}}
								dateFormat='mm-dd-yy'
							/>
						</div>
						<div className='col'>
							<Calendar
								id='basic'
								placeholder='Fecha Fin'
								value={o.endPeriod}
								onChange={(e) => {
									updateFormInput('endPeriod', i, e.target.value);
								}}
								dateFormat='mm-dd-yy'
							/>
						</div>
						<div className='col'>
							<Button
								icon={<span className='material-icons'>add</span>}
								onClick={addForm}
								className='p-button-rounded p-button-primary m-1'
								aria-label='Save'
							/>
							<Button
								icon={<span className='material-icons'>delete</span>}
								onClick={() => deleteForm(i)}
								className='p-button-rounded p-button-secondary m-1'
								aria-label='Save'
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};
