import { Button } from 'primereact/button';
import { useStoreCourses } from '../../storage/profile_zustand/ZustandCourses';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { useEffect } from 'react';
import DateService from '../../services/DateService';

export const CoursesAccordion = () => {
	const { formInputCourses, updateFormInput, addForm, deleteForm } = useStoreCourses();

	useEffect(() => {
		if (formInputCourses.length == 0) {
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
			{formInputCourses.map((o, i) => {
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
							<InputText
								type='date'
								className='w-full'
								value={DateService.parseToDate(o.realizationDate)}
								onChange={(e) => updateFormInput('realizationDate', i, e.target.value)}
							/>
						</div>
						<div className='col'>
							<InputText
								type='date'
								className='w-full'
								value={DateService.parseToDate(o.finishedDate)}
								onChange={(e) => updateFormInput('finishedDate', i, e.target.value)}
							/>
						</div>
						<div className='col-1'>
							<InputNumber
								inputClassName='w-full'
								className='w-full'
								value={o.hours}
								min={1}
								style={{width:200}}
								onChange={(e) => {
									updateFormInput('hours', i, e.value);
								}}
							/>
						</div>
						<div className='col flex justify-content-center'>
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
