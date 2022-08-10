import { NavBarApp } from '../../navbar/NavBarApp';
import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { InputSwitch } from 'primereact/inputswitch';
import { Dropdown } from 'primereact/dropdown';
import { Chips } from 'primereact/chips';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import { Tag } from 'primereact/tag';

export const PrincipalContent = () => {
	const [checked2, setChecked2] = useState(true);
	const [values2, setValues2] = useState([]);

	const [value5, setValue5] = useState(null);
	const [value6, setValue6] = useState(null);

	let today = new Date();
	let month = today.getMonth();

	let minDate = new Date();
	minDate.setMonth(month);

	// -------------------------------------------------
	const toast = useRef(null);

	const fileUploadRef = useRef(null);
	const [totalSize, setTotalSize] = useState(0);

	const chooseOptions = {
		label: 'Elegir',
		icon: 'pi pi-fw pi-images',
		className: 'custom-choose-btn p-button-rounded p-button-outlined',
	};
	const uploadOptions = {
		label: 'Subir',
		icon: 'pi pi-fw pi-cloud-upload',
		className:
			'custom-upload-btn p-button-success p-button-rounded p-button-outlined',
	};
	const cancelOptions = {
		label: 'Borrar',
		icon: 'pi pi-fw pi-times',
		className:
			'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
	};

	const onTemplateSelect = (e) => {
		let _totalSize = totalSize;
		e.files.forEach((file) => {
			_totalSize += file.size;
		});

		setTotalSize(_totalSize);
	};

	const onTemplateUpload = (e) => {
		let _totalSize = 0;
		e.files.forEach((file) => {
			_totalSize += file.size || 0;
		});

		setTotalSize(_totalSize);
		toast.current.show({
			severity: 'info',
			summary: 'Success',
			detail: 'Imagen subida',
		});
	};

	const onTemplateClear = () => {
		setTotalSize(0);
	};

	const onTemplateRemove = (file, callback) => {
		setTotalSize(totalSize - file.size);
		callback();
	};

	const emptyTemplate = () => {
		return (
			<div className='flex align-items-center flex-column'>
				<i
					className='pi pi-image mt-3'
					style={{
						fontSize: '3em',
						borderRadius: '50%',
						backgroundColor: 'var(--surface-b)',
						color: 'var(--surface-d)',
					}}></i>
				<span
					style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }}
					className='mt-4'>
					Drag and Drop Image Here
				</span>
			</div>
		);
	};

	const headerTemplate = (options) => {
		const { className, chooseButton, uploadButton } = options;
		const value = totalSize / 10000;
		const formatedValue =
			fileUploadRef && fileUploadRef.current
				? fileUploadRef.current.formatSize(totalSize)
				: '0 B';

		return (
			<div
				className={className}
				style={{
					backgroundColor: 'transparent',
					display: 'flex',
					alignItems: 'center',
				}}>
				{chooseButton}
				{uploadButton}
			</div>
		);
	};

	const itemTemplate = (file, props) => {
		return (
			<div className='flex align-items-evenly flex-wrap'>
				<div
					className='flex align-items-center'
					style={{ width: '40%' }}>
					<img
						alt={file.name}
						role='presentation'
						src={file.objectURL}
						width={100}
					/>
					<span className='flex flex-column text-left ml-3'>
						{file.name}
						<small>{new Date().toLocaleDateString()}</small>
					</span>
				</div>

				<Button
					label='Borrar'
					type='button'
					icon='pi pi-times'
					className='p-button-outlined p-button-rounded p-button-danger ml-auto'
					onClick={() => onTemplateRemove(file, props.onRemove)}
				/>
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
								<h1 className='font-bold text-3xl text-primary'>									
									Añadir vacante
								</h1>
								<p class='font-bold text-base text-pink-400'>
									Por favor, llena los siguientes campos.
								</p>

								<div>
									<div className='card mt-5'>
										<div className='grid p-fluid'>
											<div className='field col-12'>
												<div className='p-inputgroup'>
													<span class='material-icons p-inputgroup-addon'>
														title
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
														today
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
														event
													</span>
													<span className='p-float-label'>
														<Calendar
															showButtonBar
															minDate={minDate}
															id='calendar'
															value={value6}
															onChange={(e) => setValue6(e.value)}
														/>
														<label htmlFor='calendar'>Fecha fin</label>
													</span>
												</div>
											</div>
										</div>
										<div className='grid p-fluid'>
											<div className='field col-12 sm:col-6'>
												<div className='p-inputgroup'>
													<span class='material-icons p-inputgroup-addon'>
														account_balance_wallet
													</span>
													<InputNumber placeholder='Salario' />
													<span className='p-inputgroup-addon'>$</span>
													<span className='p-inputgroup-addon'>MXN</span>
												</div>
											</div>

											<div className='field col-12 sm:col-6'>
												<div className='p-inputgroup flex justify-content-center flex align-content-center'>
													<h5 className='mt-4 text-base text-gray-600'>
														¿Vacante pública?
													</h5>
													<InputSwitch
														className='mt-4 ml-4'
														checked={checked2}
														onChange={(e) => setChecked2(e.value)}
													/>
												</div>
											</div>
										</div>

										<h5 className='mt-0 text-pink-400 text-base'>
											Detalles de vacante
										</h5>
										<div className='grid p-fluid'>
											<div className='field col-12 sm:col-6'>
												<div className='p-inputgroup'>
													<span class='material-icons p-inputgroup-addon'>
														schedule
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
														currency_exchange
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
														work
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
														apartment
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

										<h5 className='mt-0 text-pink-400 text-base'>
											Beneficios de la vacante (sepáralos con una coma){' '}
										</h5>
										<div className='grid p-fluid'>
											<div className='field col-12 '>
												<div className='p-inputgroup'>
													<span class='material-icons p-inputgroup-addon text-primary'>
														auto_awesome
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
												<h5 className='mt-0 text-pink-400 text-base'>
													Subir imagen
												</h5>
												<FileUpload
													ref={fileUploadRef}
													name='demo'
													url=''
													accept='image/*'
													maxFileSize={1000000}
													onUpload={onTemplateUpload}
													onSelect={onTemplateSelect}
													onError={onTemplateClear}
													onClear={onTemplateClear}
													headerTemplate={headerTemplate}
													itemTemplate={itemTemplate}
													emptyTemplate={emptyTemplate}
													chooseOptions={chooseOptions}
													uploadOptions={uploadOptions}
													cancelOptions={cancelOptions}
												/>
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
