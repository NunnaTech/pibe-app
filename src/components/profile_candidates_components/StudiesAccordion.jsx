import { Button } from 'primereact/button';
import { useStoreStudies } from '../../storage/profile_zustand/ZustandStudies';
import { InputText } from 'primereact/inputtext';
import { useEffect } from 'react';
import { Calendar } from 'primereact/calendar';
import DateService from '../../services/DateService';

export const StudiesAccordion = () => {
	const { formInputStudies, updateFormInput, addForm, deleteForm } =
		useStoreStudies();

	useEffect(() => {
		if (formInputStudies.length == 0) {
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
			{formInputStudies.map((o, i) => {
				return (
					<div
						key={i}
						className='grid'>
						<div className='col'>
							<span className='p-float-label w-full'>
								<InputText
									id='in'
									value={o.name}
									onChange={(e) => {
										updateFormInput('name', i, e.target.value);
									}}
									className='w-full'
								/>
								<label htmlFor='in'>Escuela Universitaria</label>
							</span>
						</div>
						<div className='col'>
							<span className='p-float-label w-full'>
								<InputText
									type='date'
									className='w-full'
									defaultValue={'0000-00-00'}
									value={DateService.parseToDate(o.startPeriod)}
									onChange={(e) =>
										updateFormInput('startPeriod', i, e.target.value)
									}
								/>
								<label htmlFor='in'>Fecha de inicio</label>
							</span>
						</div>
						<div className='col'>
							<span className='p-float-label w-full'>
								<InputText
									type='date'
									className='w-full'
									defaultValue={'0000-00-00'}
									min={DateService.parseToDate(o.startPeriod)}
									value={DateService.parseToDate(o.endPeriod)}
									onChange={(e) =>
										updateFormInput('endPeriod', i, e.target.value)
									}
								/>
								<label htmlFor='in'>Fecha de fin</label>
							</span>
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
