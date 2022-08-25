import { Button } from 'primereact/button';
import { useStoreCourses } from '../../storage/profile_zustand/ZustandCourses';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { useEffect } from 'react';
import DateService from '../../services/DateService';


export const CoursesAccordion = () => {
	

	const { formInputCourses, updateFormInput, addForm, deleteForm } =
		useStoreCourses();

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
				label='Añadir'
			/>
			{formInputCourses.map((o, i) => {
				return (
					<div
						key={i}
						className='grid'>
						<div className='col flex justify-content-center'>
							<span className='p-float-label w-full'>
								<InputText
									id='in'
									value={o.name}
									onChange={(e) => {
										updateFormInput('name', i, e.target.value);
									}}
									className='w-full'
								/>
								<label htmlFor='in'>Nombre Curso</label>
							</span>
						</div>
						<div className='col'>
							<span className='p-float-label w-full'>
								<InputText
									id='in'
									value={o.trainingInstitution}
									onChange={(e) => {
										updateFormInput('trainingInstitution', i, e.target.value);
									}}
									className='w-full'
								/>
								<label htmlFor='in'>Institución Formadora</label>
							</span>
						</div>
						<div className='col'>
							<span className='p-float-label w-full'>
								<InputText
									type='date'
									defaultValue={'0000-00-00'}
									className='w-full'
									value={DateService.parseToDate(o.realizationDate)}
									onChange={(e) =>
										updateFormInput('realizationDate', i, e.target.value)
									}
								/>
								<label htmlFor='in'>Fecha de realización</label>
							</span>
						</div>
						<div className='col'>
							<span className='p-float-label w-full'>
								<InputText
									type='date'
									defaultValue={'0000-00-00'}
									className='w-full'
									min={DateService.parseToDate(o.realizationDate)}
									value={DateService.parseToDate(o.finishedDate)}
									onChange={(e) =>
										updateFormInput('finishedDate', i, e.target.value)
									}
								/>
								<label htmlFor='in'>Fecha de termino</label>
							</span>
						</div>
						<div className='col-1'>
							<span className='p-float-label w-full'>
								<InputNumber
									inputClassName='w-full'
									className='w-full'
									value={o.hours}
									style={{ width: 200 }}
									onChange={(e) => {
										updateFormInput('hours', i, e.value);
									}}
								/>
								<label htmlFor='in'>Horas</label>
							</span>
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
