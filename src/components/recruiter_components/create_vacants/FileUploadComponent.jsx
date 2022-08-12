import { FileUpload } from 'primereact/fileupload';
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';

export const FileUploadComponent = () => {
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
		<div className='grid p-fluid'>
			<div className='field col-12'>
				<h5 className='mt-0 text-pink-400 text-base'>Subir imagen</h5>
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
	);
};
