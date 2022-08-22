import React from 'react';
import { ApplicantCourses } from './ApplicantCourses';
import { ApplicantCertifications } from './ApplicantCertifications';
import { ApplicantAptitudes } from './ApplicantAptitudes';
import { useStoreProfileUser } from '../../../storage/ProfileUserZustand';

export const ApplicantSkills = () => {
	const {resumeUser} = useStoreProfileUser()
	return (
		<>
			<div className='h-full p-5 m-0 lg:m-5 border-primary'>
			<h1 className='mt-0 mb-5 text-black-alpha-60 '><span							
							className='material-icons text-pink-400 text-4xl mr-3'>
							auto_fix_high
						</span>Habilidades de {resumeUser.profile.name}</h1>
				<ApplicantCourses />
				<ApplicantCertifications />
				<ApplicantAptitudes />
			</div>
		</>
	);
};
