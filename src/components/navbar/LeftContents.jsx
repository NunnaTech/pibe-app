import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { SplitButton } from 'primereact/splitbutton';
import { useStoreSession } from '../../storage/LoginZustand';

export const LeftContents = () => {
	const { userSession } = useStoreSession();
	let navigate = useNavigate();

	/* 	const itemsRecruiter = [
		{
			label: 'VER MIS VACANTES',
			command: () => {
				navigate('/vacants');
			},
		},
		{
			label: 'AÑADIR NUEVA VACANTE',
			command: () => {
				navigate('/add-vacant');
			},
		},
	]; */

	const itemsCandidate = [
		{
			label: 'VER MIS POSTULACIONES',
			command: () => {
				navigate('/candidate');
			},
		},
	];

	const goToHome = () => {
		if (userSession.authorities[0].authority === 'ROLE_RECRUITER')
			navigate('/recruiter');
		else navigate('/candidate');
	};

	const goToAddVacant = () => {
		navigate('/add-vacant');
	};

	return (
		<>
			<Button
				label='INICIO'
				onClick={goToHome}
				icon={
					<span
						style={{ marginRight: 5 }}
						className='material-icons'>
						home
					</span>
				}
				iconPos='left'
				style={{ color: 'white' }}
				className='p-button-text p-button-plain'
			/>

			{userSession.authorities[0].authority === 'ROLE_RECRUITER' ? (
				<>
					<Button
						label='AÑADIR VACANTE'
						onClick={goToAddVacant}
						icon={
							<span
								style={{ marginRight: 5 }}
								className='material-icons'>
								add
							</span>
						}
						iconPos='left'
						style={{ color: 'white' }}
						className='p-button-text p-button-plain'
					/>
				</>
			) : (
				<>
					<SplitButton
						label='POSTULACIONES'
						icon={
							<span
								style={{ marginRight: 5 }}
								className='material-icons'>
								work
							</span>
						}
						menuButtonClassName='text-0'
						menuClassName='text-xs font-normal'
						buttonClassName='text-0'
						className='p-button-text p-button-plain'
						model={itemsCandidate}></SplitButton>
				</>
			)}
		</>
	);
};
