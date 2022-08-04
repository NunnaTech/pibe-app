import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const RightContents = () => {
	let navigate = useNavigate();

	const goToProfile = () => {
		navigate('/profile');
	};

	const closSession = () => {
		navigate('/login');
	};

	return (
		<>
			<Button
				style={{ color: 'white' }}
				icon={<span className='material-icons'>notifications</span>}
				className='p-button-rounded p-button-text p-button-plain'
				aria-label='Profile'
			/>
			<Button
				onClick={goToProfile}
				style={{ color: 'white' }}
				icon={<span className='material-icons'>account_circle</span>}
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
