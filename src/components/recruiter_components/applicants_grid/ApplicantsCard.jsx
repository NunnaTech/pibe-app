import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { SelectButton } from 'primereact/selectbutton';
import { VacantService } from '../../../services/VacantService';
import { useStoreSession } from '../../../storage/LoginZustand';
import { Toast } from 'primereact/toast';

export const CardData = ({ data, getUsersByVacant }) => {
	const { user, process } = data;
	const [displayBasic, setDisplayBasic] = useState(false);
	const [processState, setProcessState] = useState(process.id);
	const dialogFuncMap = { displayBasic: setDisplayBasic };
	const vacantServive = new VacantService();
	const { token } = useStoreSession();
	const toast = useRef(null);
	const [btnDisabled, setBtnDisabled] = useState(false);

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

	const loadingProcess = () => {
		toast.current.show({
			severity: 'info',
			summary: 'Cargando...',
			detail: 'Cambiando el proceso del candidato',
		});
		setBtnDisabled(true);
	};

	const terminateProcess = () => {
		setBtnDisabled(false);
	};

	const changeProcess = () => {
		loadingProcess();
		vacantServive
			.ChangeProcessVacant(token, data.id, user.username, { id: processState })
			.then((data) => data.json())
			.then((data) => {
				toast.current.show({
					severity: 'success',
					summary: 'Proceso cambiado',
					detail: 'El proceso ha sido cambiado correctamente',
				});
				terminateProcess();
				getUsersByVacant();
			})
			.catch((err) => {
				console.error(err);
				toast.current.show({
					severity: 'error',
					summary: 'Imposible cambiar el estado',
					detail: 'No fue posible cambiar el estado',
				});
				terminateProcess();
			});
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
					disabled={btnDisabled}
					onClick={() => {
						changeProcess();
					}}
				/>
			</div>
		);
	};

	return (
		<Card className='shadow-4 hover:shadow-6'>
			<Toast ref={toast} />
			<div className='text-center'>
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
						<br className='my-2' />
						{user.email}
						<br className='my-2' />
						{user.profile.birthDate}
						<br className='my-2' />
						{user.profile.phoneNumber}
						<h4>Proceso actual: {process.name}</h4>
					</div>
				</div>
			</div>

			<div className='grid my-2 py-0'>
				<Link
					to='/applicant-profile'
					style={{ textDecoration: 'none' }}
					className='col-12 md:col-6'>
					<Button
						label='Ver perfil'
						icon={<span className='material-icons'>visibility</span>}
						className='w-full bg-blue-700 hover:bg-blue-800'
					/>
				</Link>

				<div className='col-12 md:col-6 text-center'>
					{process.id !== 6 && process.id !== 5 && (
						<Button
							label='Cambiar Estatus'
							icon={<span className='material-icons'>edit</span>}
							className='w-full bg-pink-400 hover:bg-pink-500'
							onClick={() => onHide('displayBasic')}
						/>
					)}
					{process.id === 5 && (
						<div className='mt-2 font-bold text-green-500'>
							Candidato contratado
						</div>
					)}
					{process.id === 6 && (
						<div className='mt-2 font-bold text-red-500'>
							Vacante finalizada para este candidato
						</div>
					)}
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
				</div>
			</div>
		</Card>
	);
};
