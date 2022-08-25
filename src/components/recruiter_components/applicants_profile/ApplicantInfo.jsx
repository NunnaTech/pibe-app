import React from 'react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import  ApplicantContacts  from "./ApplicantContacts";
import { useStoreProfileUser } from '../../../storage/ProfileUserZustand';
import { useStoreSession } from '../../../storage/LoginZustand';

export const ApplicantInfo = () => {

	// Zustand Storages
	const {resumeUser, emailUser} = useStoreProfileUser()
	const {userSession} = useStoreSession()

	return (
		<>
			<div className='h-full p-5 m-0 md:m-5'>
				<div className='grid'>
					<div className='col-12 lg:col-3 p-3'>
						<div className='flex justify-content-center flex-wrap flex align-content-center flex-wrap h-full'>
							<img
								src={`https://avatars.dicebear.com/api/initials/${resumeUser.profile.name}.svg`}
								alt='Image'
								width='200'
								className='border-circle shadow-7'
							/>
						</div>
					</div>
					<div className='col-12 lg:col-6 p-3'>
						<div className='col-12'>
							<h1 className='text-primary font-normal text-5xl text-center lg:text-left'>
								{resumeUser.profile.name} {resumeUser.profile.firstName} {resumeUser.profile.secondName}
							</h1>
							<h2
								className='text-pink-400 font-italic font-light text-4xl text-center lg:text-left'>
								{resumeUser.curricularTitle}
							</h2>
						</div>
						<div className='flex justify-content-center grid flex sm:justify-content-around'>
							<div className='col-12 sm:col-6'>
								<div>
									<Button
										label={resumeUser.profile.state.name}
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
										label={resumeUser.profile.phoneNumber}
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
							<div className='col-12 sm:col-6'>
								<div>
									<Button
										label={resumeUser.languages.map((obj,index)=>{
											return (
												<div key={index}>{obj.language.language}</div>
											)
										})}
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
										label={emailUser}
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
					<div className='col-12 lg:col-3 p-3'>
						<div className='flex justify-content-center flex-wrap flex align-content-center flex-wrap h-full'>

							<div className='mt-2 mx-1'>
								{userSession.authorities[0].authority === 'ROLE_CANDIDATE' && (
									<ApplicantContacts/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
