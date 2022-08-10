import { NavBarApp } from '../../navbar/NavBarApp';
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { InputSwitch } from 'primereact/inputswitch';
import { Dropdown } from 'primereact/dropdown';
import { Chips } from 'primereact/chips';

export const PrincipalContent = () => {
	const [checked2, setChecked2] = useState(true);
	const [values2, setValues2] = useState([]);

	const [value5, setValue5] = useState(null);
	const [value6, setValue6] = useState(null);

	let today = new Date();
	let month = today.getMonth();

	let minDate = new Date();
	minDate.setMonth(month);

	const customChip = (item) => {
		return (
			<div>
				f<span>{item} - (active) </span>
				<i
					className='pi pi-user-plus'
					style={{ fontSize: '14px' }}></i>
			</div>
		);
	};

	return (
		<>
			<NavBarApp />
			<div className='h-full bg-white shadow-7 extra-margin my-5  md:px-4'>
				<div className='grid '>
					<div className='col-12 '>
						<div className='grid m-2 p-2 '>
							<div className='col-12 h-max w-full  p-0 m-0 '>
								<h1 className='font-bold text-3xl text-blue-700'>
									Añadir vacante
								</h1>
								<p class='font-bold text-sm text-pink-400 font-italic'>
									Por favor, llena los siguientes campos.
								</p>

								<div>
									<div className='card mt-5'>
										<div className='grid p-fluid'>
											<div className='field col-12'>
												<div className='p-inputgroup'>
													<span class='material-icons p-inputgroup-addon'>
														account_circle
													</span>
													<span className='p-float-label'>
														<InputText
															id='inputgroup'
															type='text'
														/>
														<label htmlFor='inputgroup'>Titulo</label>
													</span>
												</div>
											</div>

											<div className='field col-12'>
												<span className='p-float-label'>
													<InputTextarea
														autoResize='false'
														id='textarea'
														rows={2}
													/>
													<label htmlFor='textarea'>Descripción</label>
												</span>
											</div>
										</div>
										<div className='grid p-fluid'>
											<div className='field col-12 sm:col-6'>
												<div className='p-inputgroup'>
													<span class='material-icons p-inputgroup-addon'>
														account_circle
													</span>
													<span className='p-float-label'>
														<Calendar
															showButtonBar
															minDate={minDate}
															id='calendar'
															value={value5}
															onChange={(e) => setValue5(e.value)}
														/>
														<label htmlFor='calendar'>Fecha inicio</label>
													</span>
												</div>
											</div>

											<div className='field col-12 sm:col-6'>
												<div className='p-inputgroup'>
													<span class='material-icons p-inputgroup-addon'>
														account_circle
													</span>
													<span className='p-float-label'>
														<Calendar
															showButtonBar
															minDate={minDate}
															id='calendar'
															value={value6}
															onChange={(e) => setValue6(e.value)}
														/>
														<label htmlFor='calendar'>Fecha inicio</label>
													</span>
												</div>
											</div>
										</div>
										<div className='grid p-fluid'>
											<div className='field col-12 sm:col-6'>
												<div className='p-inputgroup'>
													<span className='p-inputgroup-addon'>
														<i className='pi pi-star-fill'></i>
													</span>
													<InputNumber placeholder='Salario' />
													<span className='p-inputgroup-addon'>$</span>
													<span className='p-inputgroup-addon'>MXN</span>
												</div>
											</div>

											<div className='field col-12 sm:col-6'>
												<div className='p-inputgroup flex justify-content-evenly'>
													<h5>¿Vacante pública?</h5>
													<InputSwitch
														className='mt-4 ml-5'
														checked={checked2}
														onChange={(e) => setChecked2(e.value)}
													/>
												</div>
											</div>
										</div>

										<h5 className='mt-0'>Detalles de vacante</h5>
										<div className='grid p-fluid'>
											<div className='field col-12 sm:col-6'>
												<div className='p-inputgroup'>
													<span class='material-icons p-inputgroup-addon'>
														account_circle
													</span>
													<span className='p-float-label'>
														<span className='p-float-label'>
															<Dropdown
																inputId='dropdown'
																optionLabel='name'
															/>
															<label htmlFor='dropdown'>Horario</label>
														</span>
													</span>
												</div>
											</div>

											<div className='field col-12 sm:col-6'>
												<div className='p-inputgroup'>
													<span class='material-icons p-inputgroup-addon'>
														account_circle
													</span>
													<span className='p-float-label'>
														<span className='p-float-label'>
															<Dropdown
																inputId='dropdown'
																optionLabel='name'
															/>
															<label htmlFor='dropdown'>Periodo</label>
														</span>
													</span>
												</div>
											</div>
										</div>
										<div className='grid p-fluid'>
											<div className='field col-12 sm:col-6'>
												<div className='p-inputgroup'>
													<span class='material-icons p-inputgroup-addon'>
														account_circle
													</span>
													<span className='p-float-label'>
														<span className='p-float-label'>
															<Dropdown
																inputId='dropdown'
																optionLabel='name'
															/>
															<label htmlFor='dropdown'>Modo</label>
														</span>
													</span>
												</div>
											</div>

											<div className='field col-12 sm:col-6'>
												<div className='p-inputgroup'>
													<span class='material-icons p-inputgroup-addon'>
														account_circle
													</span>
													<span className='p-float-label'>
														<span className='p-float-label'>
															<Dropdown
																inputId='dropdown'
																optionLabel='name'
															/>
															<label htmlFor='dropdown'>Estado</label>
														</span>
													</span>
												</div>
											</div>
										</div>

										<h5 className='mt-0'>
											Beneficios de la vacante (sepáralos con una coma){' '}
										</h5>
										<div className='grid p-fluid'>
											<div className='field col-12 '>
												<div className='p-inputgroup'>
													<span class='material-icons p-inputgroup-addon'>
														account_circle
													</span>
													<span className='p-float-label'>
														<span className='p-float-label'>
															<Chips
																value={values2}
																onChange={(e) => setValues2(e.value)}
																separator=','
															/>
															<label htmlFor='dropdown'>Modo</label>
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className='grid p-fluid'>
											<div className='field col-12'>
												<div className='flex justify-content-between'>
													<div>
														<Button
															className='bg-pink-400 hover:bg-pink-300'
															label='Regresar'
															icon='pi pi-arrow-left'
														/>
													</div>
													<div>
														<Button
															className='bg-pibe hover:bg-blue-800
                                                        '
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
