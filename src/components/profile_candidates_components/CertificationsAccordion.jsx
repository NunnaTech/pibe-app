import { Button } from 'primereact/button';
import { useStoreCertifications } from '../../storage/profile_zustand/ZustandCertifications';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { useEffect } from 'react';
import DateService from '../../services/DateService';

export const CertificationsAccordion = () => {
	const { formInputCertifications, updateFormInput, addForm, deleteForm } = useStoreCertifications();

	useEffect(() => {
		if (formInputCertifications.length == 0) {
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
			{formInputCertifications.map((o, i) => {
				return (
					<div
						key={i}
						className='grid'>
						<div className='col'>
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
								value={o.company}
								onChange={(e) => {
									updateFormInput('company', i, e.target.value);
								}}
								placeholder='Compañia'
								className='w-full'
							/>
						</div>
						<div className='col'>
							<InputText
								type='date'
								className='w-full'
								value={DateService.parseToDate(o.obtainedDate)}
								onChange={(e) => updateFormInput('obtainedDate', i, e.target.value)}
							/>
						</div>
						<div className='col'>
							<InputText
								type='date'
								className='w-full'
								value={DateService.parseToDate(o.expirationDate)}
								onChange={(e) => updateFormInput('expirationDate', i, e.target.value)}
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
