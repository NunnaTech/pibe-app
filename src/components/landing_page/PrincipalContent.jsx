import React from 'react';
import { NavBarApp } from '../navbar/NavBarApp';
import '../../../src/resources/static/css/pibe-style.css';


export const PrincipalContent = () => {
	return (
		<>
			<div className='h-full bg-gray-100 '>
				<div className='grid w-12 p-0 m-0'>
					<div className='col-12 p-0 m-0'>
						<div className='grid p-0 m-0'>
							<div className='col-12  h-max bg-blue-300 p-0'>
								<NavBarApp />
							</div>
							{/* Primer componente */}
							<div className='col-12 h-max p-0 first-component' >
								<div className='grid max-w-screen p-0 m-0'>
									<div className='col col-12 md:col-6'>
										<div className='flex justify-content-center flex align-content-center title-container'>
											<h1 className='font-bold'>
												Te ayudamos a encontrar el empleo 
                                                ideal para ti de <a className='text-pink-400'>forma rapida</a>
											</h1>
										</div>
									</div>
									<div className='col bg-black-alpha-30 col-12 md:col-6'>
										<div className='flex justify-content-center flex align-content-center'>
											svg
										</div>
									</div>
								</div>
								<div className='px-5 bg-blue-400'>
									<div className='flex justify-content-center flex align-content-center'>
										barra busqueda
									</div>
									<div className='flex justify-content-center flex align-content-center'>
										svg
									</div>
								</div>
							</div>
							{/* Segundo componente */}
							<div className='col-12 h-max bg-blue-100 px-0 sm:px-5 '>
								<div className='bg-yellow-100 my-5 mx-2 sm:mx-5 shadow-5'>
									<div className='flex justify-content-around flex-wrap bg-black-alpha-10'>
										<div className='flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2'>
											1
										</div>
										<div className='flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2'>
											1
										</div>
										<div className='flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2'>
											1
										</div>
										<div className='flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2'>
											1
										</div>
									</div>
								</div>
							</div>
							{/* Tercer componente */}
							<div className='col-12 h-max bg-blue-100 px-0 sm:px-5 text-center'>
								tercer componente pendiente
							</div>
							{/* Cuarto componente */}
							<div className='col-12 h-max bg-blue-200 '>
								<div className='grid max-w-screen p-0 m-0'>
									<div className='col bg-black-alpha-10 col-12 md:col-6'>
										<div className='flex justify-content-center flex align-content-center'>
											texto
										</div>
									</div>
									<div className='col bg-black-alpha-30 col-12 md:col-6'>
										<div className='flex justify-content-center flex align-content-center'>
											svg
										</div>
									</div>
								</div>
							</div>
							{/* Quinto componente */}
							<div className='col-12 h-max bg-blue-100 px-0 sm:px-5 '>
								<div className='bg-yellow-100 my-5 mx-2 sm:mx-5 shadow-5'>
									<h1 className='text-center'>
										Empresas que publican sus vacantes
									</h1>
									<div className='flex justify-content-around flex-wrap bg-black-alpha-10'>
										<div className='flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2'>
											1
										</div>
										<div className='flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2'>
											1
										</div>
										<div className='flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2'>
											1
										</div>
										<div className='flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2'>
											1
										</div>
										<div className='flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2'>
											1
										</div>
									</div>
								</div>
							</div>
							{/* Sexto componente (footer) */}
							<div className='col-12 h-max bg-blue-100 p-0 m-0'>
								<div className='bg-yellow-100 '>
									<div className='flex justify-content-between flex-wrap bg-black-alpha-10'>
										<div className='flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2'>
											1
										</div>
										<div className='flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2'>
											<div>1</div>
											<div>1</div>
											<div>1</div>
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
