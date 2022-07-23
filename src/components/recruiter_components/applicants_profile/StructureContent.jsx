import { ApplicantInfo } from '../applicants_profile/ApplicantInfo';
import { NavBarApp } from '../../navbar/NavBarApp';
import { ApplicantExperience } from './ApplicantExperience';
import { ApplicantSkills } from './ApplicantSkills';

export const StructureContent = () => {
	return (
		<>
			<NavBarApp />
			<div  className='h-full bg-gray-100 shadow-7 p-5 mx-2 my-5 md:mx-8'>
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
		</>
	);
};
