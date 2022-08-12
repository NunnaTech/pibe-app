import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { SelectButton } from 'primereact/selectbutton';
import { VacantService } from '../../../services/VacantService';
import { useStoreSession } from '../../../storage/LoginZustand';

export const CardData = ({ data }) => {
	const { user, process } = data;
	const [displayBasic, setDisplayBasic] = useState(false);
	const [processState, setProcessState] = useState(process.id);
	const dialogFuncMap = { displayBasic: setDisplayBasic };
	const vacantServive = new VacantService();
	const { token } = useStoreSession();

	const onHide = (name) => {
		dialogFuncMap[`${name}`](!displayBasic);
	};

	const options = [
		{ id: 1, name: 'Postulado' },
		{ id: 2, name: 'CV Visto' },
		{ id: 3, name: 'Entrevista' },
		{ id: 4, name: 'Idóneo' },
		{ id: 5, name: 'Contratado' },
		{ id: 6, name: 'Finalizado' },
	];

	const changeProcess = () => {
		vacantServive
			.ChangeProcessVacant(token, data.id, user.username, { id: processState })
			.then((data) => data.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	const renderFooter = (name) => {
		return (
			<div>
				<Button
					label='Cancelar'
					icon='pi pi-times'
					onClick={() => onHide(name)}
					className='p-button-text text-pink-400 hover:text-pink-500'
				/>
				<Button
					label='Guardar'
					icon='pi pi-check'
					className='bg-blue-700 hover:bg-blue-800'
					onClick={() => changeProcess()}
				/>
			</div>
		);
	};

	return (
		<Card className='shadow-4 hover:shadow-6'>
			<div className='text-center my-2'>
				<img
					alt='Card'
					className='border-circle h-5 w-5'
					src={user.profile.image}
					onError={(e) => (e.target.src = 'https://picsum.photos/400/400/')}
				/>
			</div>
			<div className='text-center'>
				<div>
					<div className='text-2xl font-bold text-blue-700'>
						{`${user.profile.name} ${user.profile.firstName} ${user.profile.secondName}`}
					</div>
					<div className='text-lg text-700'>
						{user.profile.position}
						<br className='my-2' />
						{user.profile.gender}
						<br className='my-2' />
						{user.email}
						<br className='my-2' />
						{user.profile.birthDate}
						<br className='my-2' />
						{user.profile.phoneNumber}
					</div>
				</div>
			</div>

			<div className='flex justify-content-center flex-wrap my-2 py-0'>
				<Link
					to='/applicant-profile'
					style={{ textDecoration: 'none' }}
					className='py-2 mt-2'>
					<Button
						label='Ver perfil'
						icon={<span className='material-icons'>visibility</span>}
						className='bg-blue-700 hover:bg-blue-800'
					/>
				</Link>
			</div>
			<div className='flex justify-content-center flex-wrap my-2 py-0'>
				{process.id !== 6 ? (
					<>
						<Button
							label='Cambiar Estatus'
							icon={<span className='material-icons'>edit</span>}
							className='bg-pink-400 w-5 py-2 mt-2 hover:bg-pink-500'
							onClick={() => onHide('displayBasic')}
						/>
						<Dialog
							header='Proceso de seguimiento de la vacante'
							visible={displayBasic}
							draggable={false}
							footer={renderFooter('displayBasic')}
							onHide={() => onHide('displayBasic')}>
							<div className='flex justify-content-center mb-3'>
								<div>
									<h3 className='text-blue-700 text-center'>
										Por favor, selecciona el proceso pertinente
									</h3>
									<SelectButton
										optionLabel='name'
										value={processState}
										options={options}
										optionValue='id'
										onChange={(e) => setProcessState(e.value)}
									/>
								</div>
							</div>
						</Dialog>
					</>
				) : (
					<div className='font-bold text-red-500'>
						Vacante finalizada para este usuario
					</div>
				)}
			</div>
		</Card>
	);
};
