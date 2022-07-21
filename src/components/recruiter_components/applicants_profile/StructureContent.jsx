import { ApplicantInfo } from '../applicants_profile/ApplicantInfo';
import { NavBarApp } from '../../navbar/NavBarApp';
import { ApplicantExperience } from './ApplicantExperience';
import { ApplicantSkills } from './ApplicantSkills';

export const StructureContent = () => {
	return (
		<>
			<NavBarApp />
			<div  className='h-screen bg-gray-100 shadow-7 p-5 mx-2 my-5 md:mx-8'>
				<div className='grid'>
					<div className='col-12'>
						<div className='grid'>
							<div className='col-12 h-max w-full bg-blue-100'>
								<ApplicantInfo />
							</div>
							<div className='col-12 h-max md:col-6 bg-yellow-100'>
								<ApplicantExperience />
							</div>
							<div className='col-12 h-max md:col-6 bg-green-100'>
								<ApplicantSkills />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
