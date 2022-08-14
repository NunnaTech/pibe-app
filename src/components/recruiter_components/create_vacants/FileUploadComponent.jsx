import { FileUpload } from 'primereact/fileupload';
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ImageService } from '../../../services/ImageService';

export const FileUploadComponent = ({ vacant, setVacant }) => {
	const toast = useRef(null);
	const imageService = new ImageService();
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
			'hidden custom-upload-btn p-button-success p-button-rounded p-button-outlined',
	};
	const cancelOptions = {
		label: 'Borrar',
		icon: 'pi pi-fw pi-times',
		className:
			' custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
	};

	const onTemplateSelect = async (e) => {
		toast.current.show({
			severity: 'info',
			summary: 'Subiendo imagen',
			detail: 'Espere a que se suba la imagen',
			life: 3000,
		});
		if (
			e.files[0].type === 'image/png' ||
			e.files[0].type === 'image/jpg' ||
			e.files[0].type === 'image/jpeg'
		) {
			if (e.files[0].size <= 625000) {
				try {
					const image = await imageService.uploadImage(e.files[0]);
					setVacant({ ...vacant, image: image });
					toast.current.show({
						severity: 'success',
						summary: '¡Imagen subida correctamente!',
						life: 3000,
					});
				} catch (error) {
					console.error(error);
					toast.current.show({
						severity: 'error',
						summary: 'Ocurrió un error',
						life: 3000,
					});
				}
			} else {
				toast.current.show({
					severity: 'error',
					summary: 'Ocurrió un error',
					detail: 'Imagen pesada',
					life: 3000,
				});
			}
		} else {
			toast.current.show({
				severity: 'error',
				summary: 'Ocurrió un error',
				detail: 'El archivo no es una imagen',
				life: 3000,
			});
		}
	};

	const onTemplateClear = () => {
		setTotalSize(0);
	};

	const onTemplateRemove = (file, callback) => {
		setTotalSize(totalSize - file.size);
		callback();
		toast.current.show({
			severity: 'info',
			summary: '¡Imagen eliminada correctamente!',
			life: 3000,
		});
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
					Suelta tu imagen aquí
				</span>
			</div>
		);
	};

	const headerTemplate = (options) => {
		const { className, chooseButton, uploadButton } = options;

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
		<div className='grid p-fluid'>
			<Toast ref={toast} />
			<div className='field col-12'>
				<h5 className='mt-0 text-pink-400 text-base'>Subir imagen</h5>
				<FileUpload
					ref={fileUploadRef}
					name='demo'
					url='https://api-upscaler-origin.icons8.com/api/frontend/v1/batches'
					accept='.png, .jpg, .jpeg'
					maxFileSize={5000000}
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
	);
};
