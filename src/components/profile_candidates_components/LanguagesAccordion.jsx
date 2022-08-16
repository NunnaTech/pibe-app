import { Button } from 'primereact/button';
import { useStoreLanguages } from '../../storage/profile_zustand/ZustandLanguages';
import { InputText } from 'primereact/inputtext';
import { useEffect } from 'react';

export const LanguagesAccordion = () => {
	const { formInputLanguages, updateFormInput, addForm, deleteForm } = useStoreLanguages();

	useEffect(() => {
		if (formInputLanguages.length == 0) {
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
			{formInputLanguages.map((o, i) => {
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
								placeholder='Ingles'
								className='w-full'
							/>
						</div>
						<div className='col'>
							<InputText
								id='in'
								value={o.abbreviation}
								onChange={(e) => {
									updateFormInput('abbreviation', i, e.target.value);
								}}
								placeholder='Básico'
								className='w-full'
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
