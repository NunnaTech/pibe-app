import React from 'react';
import { Divider } from 'primereact/divider';
import { Fieldset } from 'primereact/fieldset';
import '../../../resources/static/css/pibe-style.css';
import { useStoreProfileUser } from '../../../storage/ProfileUserZustand';

export const ApplicantExperience = () => {
	const {resumeUser} = useStoreProfileUser()
	return (
		<>
			<div className='h-full p-5 m-0 lg:m-5'>
				<h1 className='mt-0 mb-5 text-black-alpha-60 '>
					<span className='material-icons text-pink-400 text-4xl mr-3'>
						work
					</span>
					Experiencia de {resumeUser.profile.name}
				</h1>
				<div>
					<Fieldset
						legend='Sobre Roberto'
						className='mypanelPrimary text-lg shadow-5'>
						<p className='text-gray-700  text-justify'>
							{resumeUser.description}
						</p>
					</Fieldset>
				</div>
				<Divider />
				<div>
					<Fieldset
						legend='Experiencia Laboral'
						className='mypanel text-lg shadow-5 '>
						<ul className='list-disc text-justify text-gray-700'>
							{resumeUser.experiences.map((obj,index)=>{
								return(
									<li key={index}>
										{obj.position} - {obj.activities} ({new Date(obj.startPeriod).toLocaleDateString('fr-CA')} - {new Date(obj.endPeriod).toLocaleDateString('fr-CA')})
									</li>
								)
							})}
						</ul>
					</Fieldset>
				</div>
				<Divider />
				<div>
					<Fieldset
						legend='Educación'
						className='mypanel text-lg shadow-5'>
						<ul className='list-disc text-justify text-gray-700'>
							{resumeUser.studies.map((obj,index)=>{
								return(
									<li key={index}>
										{obj.name} ({new Date(obj.startPeriod).toLocaleDateString('fr-CA')} - {new Date(obj.endPeriod).toLocaleDateString('fr-CA')})
									</li>
								)
							})}
						</ul>
					</Fieldset>
				</div>
			</div>
		</>
	);
};
