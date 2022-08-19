import React from 'react';
import { NavBarApp } from '../navbar/NavBarApp';
import { LandingNavBar } from "./LandingNavBar"
import SideImage from "../../resources/static/img/person.svg"
import Work from "../../resources/static/img/back.svg"
import Flow from "../../resources/static/img/flow.svg"
import Places from "../../resources/static/img/places.svg"
import '../../../src/resources/static/css/pibe-style.css';
import { Footer } from './Footer';


export const PrincipalContent = () => {
	return (
		<>
			<div className='h-full bg-gray-100 '>
				<div className='grid w-12 p-0 m-0'>
					<div className='col-12 p-0 m-0'>
						<div className='grid p-0 m-0'>
							<div className='col-12  h-max bg-blue-300 p-0 sticky top-0 z-50 shadow-1 '>
								<LandingNavBar />
							</div>
							{/* Primer componente */}
							<div className='col-12 first-component p-5' >
								<div className='grid max-w-screen p-0 m-0'>
									<div className='col col-12 md:col-6 center flex align-items-center'>
										<div className='mx-6'>
											<h1 className='font-bold text-5xl text-white text-justify'>
												Te ayudamos a encontrar el empleo
												ideal para ti de <a className='text-pink-400'>forma rápida</a>
											</h1>
										</div>
									</div>
									<div className='col col-12 md:col-6'>
										<div className=''>
											<img src={SideImage} alt="Logo" />
										</div>
									</div>
								</div>
							</div>

							<div className='col-12 bg-blue-100 p-5'>
								<div className='grid max-w-screen p-0 m-0'>
									<div className='col col-12 md:col-6 '>
										<div className='mx-6'>
											<img src={Work} alt="Logo" />
										</div>
									</div>
									<div className='col col-12 md:col-6 center'>
										<div className='mx-6'>
											<img src={Flow} alt="Logo" />
										</div>
									</div>
								</div>
							</div>

							<div className='col-12 bg-white p-5'>
								<h1 className='font-bold text-4xl text-blue-800 text-center'>
									Empresas que publican sus vacantes en nuestra plataforma
									<img src={Places} alt="Logo" />
								</h1>
							</div>
							<Footer/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
