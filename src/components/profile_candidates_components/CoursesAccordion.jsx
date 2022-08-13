import { Button } from 'primereact/button';
import { useStoreCourses } from '../../storage/profile_zustand/ZustandCourses';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { useEffect } from 'react';

export const CoursesAccordion = () => {
	const { formInput, updateFormInput, addForm, deleteForm } = useStoreCourses();

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
						<div className='col flex justify-content-center'>
							<InputText
								id='in'
								value={o.name}
								onChange={(e) => {
									updateFormInput('name', i, e.target.value);
								}}
								placeholder='Nombre Curso'
								className='w-full'
							/>
						</div>
						<div className='col'>
							<InputNumber
								inputClassName='w-full'
								className='w-full'
								value={o.hours}
								style={{width:200}}
								onChange={(e) => {
									updateFormInput('hours', i, e.target.value);
								}}
							/>
						</div>
						<div className='col'>
							<InputText
								id='in'
								value={o.trainingInstitution}
								onChange={(e) => {
									updateFormInput('trainingInstitution', i, e.target.value);
								}}
								placeholder='Institución Formadora'
								className='w-full'
							/>
						</div>
						<div className='col'>
							<Calendar
								id='basic'
								placeholder='Fecha Realización'
								value={o.dateRealization}
								onChange={(e) => {
									updateFormInput('dateRealization', i, e.target.value);
								}}
								dateFormat='mm-dd-yy'
							/>
						</div>
						<div className='col flex justify-content-center'>
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
