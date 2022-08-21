import { PerfilCard } from './PerfilCard';
import { Experience } from './Experience';
import { Studies } from './Studies';
import { Certifications } from './Certifications';
import { Courses } from './Courses';
import { Languages } from './Languages';
import { Aptitudes } from './Aptitudes';
import { useEffect } from 'react';
import { useState } from 'react';
import { TemplatecvService } from '../../../services/TemplatecvService';
import { useStoreSession } from '../../../storage/LoginZustand';
export const MainTemplate = () => {
	//hooks normales
	const [resume, setResume] = useState(null)
	//mandar a llamar la session de Zustan
	const { token, userSession } = useStoreSession()
	const serviceTemplate = new TemplatecvService()
	

	useEffect(() => {
		serviceTemplate.getResumeUser(token, userSession.username)
			.then((res) => res.json())
			.then((data) => {
				setResume(data)
			}).catch((error) => console.log(error))
	}, [])
	return (
		<>
			<div className='md:w-8 lg:w-8 h-auto shadow-7 p-5 mx-2 my-5 md:mx-8 flex '>
				<div className='grid ' >
					<div className='col-12 '>
						<div className='grid  '>
							{resume != null && (
								<>
									<div className='col-12 '>
										<PerfilCard resume={resume} />
									</div>
									<div className='col-12'>
										<Experience resume={resume} />
									</div>
									<div className='col-12'>
										<Studies resume={resume} />
									</div>
									<div className='col-12'>
										<Certifications resume={resume}/>
									</div>
									<div className='col-12'>
										<Courses resume={resume}/>
									</div>
									<div className='col-12 h-max md:col-6 '>
										<Languages resume={resume}/>
									</div>
									<div className='col-12 h-max md:col-6 '>
										<Aptitudes resume={resume} />
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};