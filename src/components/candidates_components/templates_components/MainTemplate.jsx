import { PerfilCard } from './PerfilCard';
import { Experience } from './Experience';
import { Studies } from './Studies';
import { Certifications } from './Certifications';
import { Courses } from './Courses';
import { Languages } from './Languages';
import { Aptitudes } from './Aptitudes';
export const MainTemplate = () => {
	return (
		<>
			
            
			<div  className='md:w-8 lg:w-8 h-auto shadow-7 p-5 mx-2 my-5 md:mx-8 flex '>
				<div className='grid ' >
					<div className='col-12 '>
						<div className='grid  '>
							<div className='col-12 '>
							<PerfilCard/>
							</div>
							<div className='col-12'>
							<Experience/>
							</div>
							<div className='col-12'>
							<Studies/>
							</div>
							<div className='col-12'>
							<Certifications/>
							</div>
							<div className='col-12'>
							<Courses/>
							</div>
							<div className='col-12 h-max md:col-6 '>
                            <Languages/>
							</div>
							<div className='col-12 h-max md:col-6 '>
                            <Aptitudes/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};