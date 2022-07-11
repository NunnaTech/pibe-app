import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

export const CardData = () => {
	const header = (
		<div class='grid flex justify-content-center '>
			<div class='col-12 md:col-6 flex align-items-center justify-content-center max-w-10rem'>
				<img
					alt='Card'
					className='border-circle shadow-5 mt-3'
					src='images/usercard.png'
					onError={(e) => (e.target.src = 'https://picsum.photos/400/400/')}
				/>
			</div>
			<div class='col-12 md:col-6 m-0 p-0'>
				<div className='col-12 flex align-items-center justify-content-center'>
					<div className='text-2xl font-bold mt-5 text-blue-700 text-center'>
						Adriana Lopez Zuñiga
					</div>
				</div>
				<div class='col-12  flex align-items-center justify-content-center'>
					<div>
						{[...Array(3).keys()].map((e) => {
							return (
								<Tag
									value='Frontend'
									severity='info'
									className='mx-1 my-1'></Tag>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);

	const footer = (
		<div class='flex justify-content-center flex-wrap my-2 py-0'>
			<Button
				style={{ color: 'white' }}
				icon={<span className='material-icons '>visibility</span>}
				className='bg-blue-700 w-5 py-3'
				label='Ver Perfil'
			/>
		</div>
	);

	return (
		<Card
			className='w-auto shadow-4 hover:shadow-6'
			footer={footer}
			header={header}>
			<div className='bg-blue-100 border-1 border-400 border-round m-2 pt-3 pb-2'>
				<div className='grid'>
					<div className='col col-3 flex align-items-center justify-content-center'>
						<span className='material-icons text-6xl text-blue-800'>
							school
						</span>
					</div>
					<div className='col col-9'>
						<div className='text-base font-light text-blue-800 p-2 text-center font-bold'>
							Ingeniería en Tecnologías de la Información
						</div>
						<div className='text-base font-light text-blue-800 p-2 text-center font-italic'>
							Universidad Autonoma de México{' '}
						</div>
					</div>
				</div>
			</div>
			<div className='text-base font-light text-700 mt-4 py-2 px-2 text-justify'>
				Lorem Ipsum is simply dummy text of the printing and typesettingstry.
				Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing
				and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply
				dummy text of the printing and typesetting industry. Lorem Ipsum has
				been
			</div>
		</Card>
	);
};
