import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { CardContent } from './CardContent';
import DateService from '../../../services/DateService';
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
					className='bg-primary hover:bg-primary-600'
					disabled={btnDisabled}
					onClick={() => {
						changeProcess();
					}}
				/>
			</div>
		);
	};

	const footer = (
		<div className='flex justify-content-around flex-wrap'>
			<Link
				to={`/applicant-profile/${user.username}`}
				style={{ textDecoration: 'none' }}
				className='col-12 md:col-6'>
				<Button
					label='Ver perfil'
					icon={<span className='material-icons'>visibility</span>}
					className='w-full bg-primary hover:bg-primary-600'
				/>
			</Link>
			<div className='col-12 md:col-6 text-center'>
				{process.id !== 6 && process.id !== 5 && (
					<Button
						label='Cambiar Proceso'
						icon={<span className='material-icons'>edit</span>}
						className='w-full bg-pink-400 hover:bg-pink-500'
						onClick={() => onHide('displayBasic')}
					/>
				)}
				{process.id === 5 && (
					<div className='font-bold text-lg text-teal-500 bg-teal-100  border-round-lg p-1'>
						Candidato contratado
					</div>
				)}
				{process.id === 6 && (
					<div className='font-bold text-lg text-red-500'>
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
							<h3 className='text-primary text-center'>
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
	);

	return (
		<Card
			footer={footer}
			className='w-25rem m-5 shadow-3 hover:shadow-6'>
			<Toast ref={toast} />
			<div className='container p-0 m-0'>
				<div className='text-center'>
					<img
						alt='Card'
						className='border-circle h-5 w-5 shadow-4'
						src={user.profile.image}
						onError={(e) => (e.target.src = 'https://s3.aws-k8s.generated.photos/ai-generated-photos/upscaler-uploads/uploads/60/92d95681-72ca-4060-9bd0-f45d225efaf4.png')}
					/>
				</div>
				<div className='text-center my-3'>
					<div className='text-2xl font-bold text-primary'>
						{`${user.profile.name} ${user.profile.firstName} ${user.profile.secondName}`}
					</div>
				</div>
				<div className='pl-2'>
					<div className='flex my-3 col-12'>
						<div className=' flex align-content-center flex-wrap  mr-3 '>
							<span className='material-icons text-2xl border-circle p-3 text-teal-500 bg-teal-100'>
								email
							</span>
						</div>
						<div className='text-base font-light line-height-3'>
							<p className='font-bold my-0 text-teal-500'>Correo electrónico</p>
							<span className='font-normal text-gray-700'>{user.email}</span>
						</div>
					</div>
					<div className='flex my-3 col-12'>
						<div className=' flex align-content-center flex-wrap  mr-3 '>
							<span className='material-icons text-2xl border-circle p-3 text-blue-500 bg-blue-100'>
								cake
							</span>
						</div>
						<div className='text-base font-light line-height-3'>
							<p className='font-bold my-0 text-blue-500'>
								Fecha de nacimiento
							</p>
							<span className='font-normal text-gray-700'>
								{DateService.parseToDate(user.profile.birthDate)}
							</span>
						</div>
					</div>
					<div className='flex my-3 col-12'>
						<div className=' flex align-content-center flex-wrap  mr-3 '>
							<span className='material-icons text-2xl border-circle p-3 text-yellow-500 bg-yellow-100'>
								phone
							</span>
						</div>
						<div className='text-base font-light line-height-3'>
							<p className='font-bold my-0 text-yellow-500'>Teléfono</p>
							<span className='font-normal text-gray-700'>
								{user.profile.phoneNumber}
							</span>
						</div>
					</div>
					<div className='flex my-3 col-12 bg-red-100 border-round-2xl'>
						<div className=' flex align-content-center flex-wrap  mr-3 '>
							<span className='material-icons text-2xl border-circle p-3 text-red-500 '>
								account_tree
							</span>
						</div>
						<div className='text-base font-light line-height-3'>
							<p className='font-bold text-lg my-0 text-red-500'>
								Proceso actual
							</p>
							<span className='text-base text-gray-700 font-bold'>
								{process.name}
							</span>
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
};
