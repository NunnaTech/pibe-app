import { Button } from 'primereact/button';
import { useStoreExperience } from '../../storage/profile_zustand/ZustandExperience';
import { InputText } from 'primereact/inputtext';
import { useEffect } from 'react';
import { Calendar } from 'primereact/calendar';
import DateService from '../../services/DateService';

export const ExperienceAccordion = () => {
	const { formInputExperience, updateFormInput, addForm, deleteForm } =
		useStoreExperience();

	useEffect(() => {
		if (formInputExperience.length == 0) {
			addForm();
			deleteForm(1);
		}
	}, []);

	return (
		<div>
			<Button
				icon={<span className='material-icons'>add</span>}
				onClick={addForm}
				className='p-button-rounded p-button-primary mb-3'
				aria-label='Save'
				label="Añadir"
			/>
			{formInputExperience.map((o, i) => {
				return (
					<div
						key={i}
						className='grid flex'>
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
							<InputText
								type='date'
								className='w-full'
								value={DateService.parseToDate(o.startPeriod)}
								onChange={(e) => updateFormInput('startPeriod', i, e.target.value)}
							/>
						</div>
						<div className='col'>
							<InputText
								type='date'
								className='w-full'
								value={DateService.parseToDate(o.endPeriod)}
								onChange={(e) => updateFormInput('endPeriod', i, e.target.value)}
							/>
						</div>
						<div className='col'>
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
