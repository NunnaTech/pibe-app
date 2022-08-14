import { ApplicantInfo } from '../applicants_profile/ApplicantInfo';
import { NavBarApp } from '../../navbar/NavBarApp';
import { ApplicantExperience } from './ApplicantExperience';
import { ApplicantSkills } from './ApplicantSkills';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useStoreProfileUser } from '../../../storage/ProfileUserZustand';
import { useStoreSession } from '../../../storage/LoginZustand';
import { ProfileUserService } from '../../../services/ProfileUserService';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const StructureContent = () => {
	// Zustand
	const {token} = useStoreSession()
	const {resumeUser,setResumeUser, emailUser,setEmailUser} = useStoreProfileUser()

	// Router Params
	let params = useParams()

	// API Services
	const profileUserService = new ProfileUserService()


	useEffect(()=>{
		setResumeUser(null)
		profileUserService.getResumeInfoUser(params.user, token)
			.then((res) => res.json())
			.then((data) => {
				setResumeUser(data)
				profileUserService.getUserByUsername(params.user, token)
					.then((res) => res.json())
					.then((data)=>{
						setEmailUser(data.email)
					})
			}).catch((error)=>{
				console.log(error)
		})
	},[])

	return (
		<>
			<NavBarApp />
			{resumeUser!=null && emailUser!=null ? (
				<div  className='h-full bg-gray-100 shadow-7 p-2 mx-2 my-5 md:mx-8'>
					<div className='grid'>
						<div className='col-12'>
							<div className='grid'>
								<div className='col-12 h-max w-full bg-blue-100'>
									<ApplicantInfo />
								</div>
								<div className='col-12 h-max lg:col-6 '>
									<ApplicantExperience />
								</div>
								<div className='col-12 h-max lg:col-6 '>
									<ApplicantSkills />
								</div>
							</div>
						</div>
					</div>
				</div>
			):(
				<div className='flex justify-content-center font-bold text-xl mt-5'>
					<ProgressSpinner />
				</div>
			)}
		</>
	);
};
