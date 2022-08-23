import { PerfilCard } from './PerfilCard';
import { Experience } from './Experience';
import { Studies } from './Studies';
import { Certifications } from './Certifications';
import { Courses } from './Courses';
import { Languages } from './Languages';
import { Aptitudes } from './Aptitudes';
import { useEffect, useState } from 'react';
import { TemplatecvService } from '../../../services/TemplatecvService';
import { useStoreSession } from '../../../storage/LoginZustand';
import { useParams } from 'react-router-dom';

export const MainTemplate = () => {
	let { id } = useParams();
	const serviceTemplate = new TemplatecvService();
	const [resume, setResume] = useState(null);
	const { token, userSession } = useStoreSession();
	const [color, setColor] = useState('');

	useEffect(() => {
		{console.log(id)}
		serviceTemplate
			.getResumeUser(token, userSession.username)
			.then((res) => res.json())
			.then((data) => {
				setResume(data);
			})
			.catch((error) => console.log(error));

		switch (id) {
			case "1":
				setColor('bg-blue-900');
				break;
			case "2":
				setColor('bg-teal-600');
				break;

			case "3":
				setColor('bg-red-600');
				break;
			default:
				break;
		}
	}, []);

	return (
		<div className='md:w-8 lg:w-8 h-auto shadow-7 p-5 mx-2 my-5 md:mx-8 flex '>
			<div className='grid '>
				<div className='col-12 '>
					<div className='grid  '>
						{resume != null && (
							<>
								<div className='col-12 '>
									<PerfilCard
										resume={resume}
										color={color}
									/>
								</div>
								<div className='col-12'>
									<Experience resume={resume}
									color={color} />
								</div>
								<div className='col-12'>
									<Studies resume={resume}
									color={color} />
								</div>
								<div className='col-12'>
									<Certifications resume={resume}
									color={color} />
								</div>
								<div className='col-12'>
									<Courses resume={resume}
										color={color} />
								</div>
								<div className='col-12 h-max md:col-6 '>
									<Languages resume={resume} 
									color={color}/>
								</div>
								<div className='col-12 h-max md:col-6 '>
									<Aptitudes resume={resume} 
									color={color}/>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
