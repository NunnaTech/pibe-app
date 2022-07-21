import React from 'react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

export const ApplicantInfo = () => {
	return (
		<>
			<div className='h-full p-5 m-0 md:m-5'>
				<div className='grid'>
					<div className='col-12 lg:col-2 p-3'>
						<div className='flex justify-content-center mt-5'>
							<img
								src='https://picsum.photos/400/400/'
								alt='Image'
								width='200'
								className='border-circle shadow-7'
							/>
						</div>
					</div>
					<div className='col-12 lg:col-6 p-3'>
						<div className='col-12'>
							<h1 className='text-blue-700 font-normal text-5xl text-center md:text-left'>
								Roberto Gutierrez Salgado
							</h1>
							<h2
								className='text-pink-400 font-italic font-light text-4xl text-center md:text-left'>
								Desarrollador Backend
							</h2>
						</div>
						<div class='flex justify-content-around'>
							<div className='col-6'>
								<div>
									<Button
										label='México'
										icon={
											<span
												style={{ marginRight: 7 }}
												className='material-icons '>
												place
											</span>
										}
										className='text-gray-700 p-button-text text-xl p-0'
										style={{ cursor: 'default' }}
									/>
								</div>
								<div>
									<Button
										label='777 344 50 36'
										icon={
											<span
												style={{ marginRight: 7 }}
												className='material-icons '>
												phone
											</span>
										}
										className='text-gray-700 p-button-text text-xl p-0 mt-5'
										style={{ cursor: 'default' }}
									/>
								</div>
							</div>
							<div className='col-6'>
								<div>
									<Button
										label='ESP/ENG/DEU'
										icon={
											<span
												style={{ marginRight: 7 }}
												className='material-icons '>
												language
											</span>
										}
										iconPos='left'
										className='text-gray-700 p-button-text text-xl p-0'
										style={{ cursor: 'default' }}
									/>
								</div>
								<div>
									<Button
										label='roberto@gmail.com'
										icon={
											<span
												style={{ marginRight: 7 }}
												className='material-icons '>
												email
											</span>
										}
										iconPos='left'
										className='text-gray-700 p-button-text text-xl p-0 mt-5'
										style={{ cursor: 'default' }}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 lg:col-4 p-3'>
						<div className='flex justify-content-center align-content-center'>
							<div className='mt-2 lg:mt-8'>
								<Button
									label='Descargar CV'
									icon={<span className='material-icons mr-2 text-3xl'>download</span>}
									className='bg-blue-700 hover:bg-blue-800 shadow-5 p-5 text-3xl'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
