import { NavBarApp } from '../../navbar/NavBarApp';
import { FileUploadComponent } from './FileUploadComponent';
import { TitleAndDescription } from './TitleAndDescription';
import { BenefitsVacant } from './BenefitsVacant';
import { DetailsVacant } from './DetailsVacant';
import { DatesAndSalary } from './DatesAndSalary';
import { Button } from 'primereact/button';
import React, { useState, useRef } from 'react';
import { useStoreSession } from '../../../storage/LoginZustand';
import { VacantService } from '../../../services/VacantService';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';

export const PrincipalContent = () => {
	const toast = useRef(null);
	const navigate = useNavigate();
	const { token, userSession } = useStoreSession();
	const vacantService = new VacantService();
	const [vacant, setVacant] = useState({
		benefits: [],
		creator: {
			username: userSession.username,
		},
		description: '',
		endDate: '',
		image: '',
		mode: {
			id: 0,
			name: '',
		},
		period: {
			id: 0,
			name: '',
		},
		public: true,
		salary: '',
		schedule: {
			id: 0,
			name: '',
		},
		startDate: '',
		state: {
			id: 0,
			name: '',
		},
		title: '',
	});

	const uploadInformation = async () => {
		vacantService
			.AddNewVacant(token, vacant)
			.then((data) => {
				switch (data.status) {
					case 201:
						toast.current.show({
							severity: 'success',
							summary: 'Exito',
							detail: 'El registro de los datos se hizo correctamente',
							sticky: true,
						});
						navigate('/recruiter');
						break;
					case 403:
						toast.current.show({
							severity: 'warn',
							summary: 'Atención',
							detail:
								'No cuentas con los permisos suficientes para hacer esta acción',
							sticky: true,
						});
						break;
					default:
						toast.current.show({
							severity: 'error',
							summary: 'Error de la aplicación',
							detail: 'A ocurrio un error en el servidor',
							sticky: true,
						});
						break;
				}
			})
			.catch((error) => {
				toast.current.show({
					severity: 'warn',
					summary: 'Advertencia',
					detail: 'Datos invalidos del usuario',
					sticky: true,
				});
			});
	};

	return (
		<>
			<NavBarApp />
			<div className='h-full bg-white shadow-7 extra-margin my-5  md:px-4'>
				<div className='grid '>
					<div className='col-12 '>
						<div className='grid m-2 p-2 '>
							<div className='col-12 h-max w-full  p-0 m-0 '>
								<Toast ref={toast} />
								<h1 className='font-bold text-3xl text-primary'>
									Añadir vacante
								</h1>
								<p className='font-bold text-base text-pink-400'>
									Por favor, llena los siguientes campos.
								</p>

								<div>
									<div className='card mt-5'>
										<TitleAndDescription
											vacant={vacant}
											setVacant={setVacant}
										/>
										<DatesAndSalary
											vacant={vacant}
											setVacant={setVacant}
										/>
										<DetailsVacant
											vacant={vacant}
											setVacant={setVacant}
										/>
										<BenefitsVacant
											vacant={vacant}
											setVacant={setVacant}
										/>
										<FileUploadComponent
											vacant={vacant}
											setVacant={setVacant}
										/>
										<div className='grid p-fluid'>
											<div className='field col-12'>
												<div className=' sm:flex sm:justify-content-between col-12'>
													<div>
														<Button
															className='bg-pink-400 hover:bg-pink-300 mb-3'
															label='Regresar'
															icon='pi pi-arrow-left'
														/>
													</div>
													<div>
														<Button
															label='Guardar'
															icon='pi pi-save'
															onClick={uploadInformation}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
