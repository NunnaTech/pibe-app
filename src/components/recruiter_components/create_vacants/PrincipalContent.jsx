import { NavBarApp } from '../../navbar/NavBarApp';
import { FileUploadComponent } from './FileUploadComponent';
import { TitleAndDescription } from './TitleAndDescription';
import { BenefitsVacant } from './BenefitsVacant';
import { DetailsVacant } from './DetailsVacant';
import { DatesAndSalary } from './DatesAndSalary';
import { Button } from 'primereact/button';

export const PrincipalContent = () => {
	// -------------------------------------------------

	return (
		<>
			<NavBarApp />
			<div className='h-full bg-white shadow-7 extra-margin my-5  md:px-4'>
				<div className='grid '>
					<div className='col-12 '>
						<div className='grid m-2 p-2 '>
							<div className='col-12 h-max w-full  p-0 m-0 '>
								<h1 className='font-bold text-3xl text-primary'>
									Añadir vacante
								</h1>
								<p class='font-bold text-base text-pink-400'>
									Por favor, llena los siguientes campos.
								</p>

								<div>
									<div className='card mt-5'>
										<TitleAndDescription />
										<DatesAndSalary />
										<DetailsVacant />
										<BenefitsVacant />
										<FileUploadComponent />

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
