import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { useNavigate } from 'react-router-dom';
import { useStoreSession } from '../../storage/LoginZustand';

export const RightContents = () => {
	const { userSession } = useStoreSession();

	let navigate = useNavigate();

	const itemsProfile = [
		{
			label: 'MI PERFIL',
			command: () => {
				navigate(`/profile/${userSession.username}`);
			},
		},
		{
			label: 'CONFIGURAR MI PERFIL',
			command: () => {
				navigate('/profile');
			},
		},
	];

	const goToProfile = () => {
		navigate('/profile');
	};

	const closSession = () => {
		navigate('/login');
		window.location.reload(false);
	};

	return (
		<>
			{userSession.authorities[0].authority === 'ROLE_CANDIDATE' ? (
				<SplitButton
					icon={<span className='material-icons'>account_circle</span>}
					menuButtonClassName='text-0'
					menuClassName='text-xs font-normal'
					buttonClassName='text-0'
					className='p-button-text p-button-plain'
					model={itemsProfile}></SplitButton>
			) : (
				<Button
					style={{ color: 'white' }}
					icon={<span className='material-icons'>account_circle</span>}
					className='p-button-rounded p-button-text p-button-plain'
					aria-label='Profile'
					onClick={goToProfile}
				/>
			)}

			<Button
				style={{ color: 'white' }}
				icon={<span className='material-icons'>notifications</span>}
				onClick={()=>navigate("/notifications")}
				className='p-button-rounded p-button-text p-button-plain'
				aria-label='Profile'
			/>
			<Button
				onClick={closSession}
				style={{ color: 'white' }}
				icon={<span className='material-icons'>door_front</span>}
				className='p-button-rounded p-button-text p-button-plain'
				aria-label='Profile'
			/>
		</>
	);
};

