import React from 'react';
import { useStoreProfileUser } from '../../../storage/ProfileUserZustand';

export const ApplicantCertifications = () => {
	const {resumeUser} = useStoreProfileUser()
	return (
		<>
			<div className='p-4'>
					<div className='flex align-content-center flex-wrap h-full'>
						<span
							style={{ marginRight: 5 }}
							className='material-icons text-pink-400 text-3xl mr-2'>
							workspace_premium
						</span>
						<h2 className='text-blue-700  text-2xl m-0'>Certificaciones</h2>
					</div>
					<div>
						<ul className='list-disc text-justify ml-5 text-lg text-gray-700'>
							{resumeUser.certifications.map((obj,index)=>{
								return(
									<li key={index}>
										{obj.name} - {obj.company} - ({new Date(obj.obtainedDate).toLocaleDateString('fr-CA')} - {new Date(obj.expirationDate).toLocaleDateString('fr-CA')})
									</li>
								)
							})}
						</ul>
					</div>
				</div>
		</>
	);
};
