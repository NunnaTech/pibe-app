import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DialogApp } from '../components/dialogs/DialogApp';
import { NavBarApp } from '../components/navbar/NavBarApp';
import { useStoreDialog } from '../storage/DialogZustand';
import { useStoreSession } from '../storage/LoginZustand';

export const CandidatePage = () => {
	const { userSession } = useStoreSession();
	const { setMessageDialog, setDisplayDialog, setHeaderMessage } =
		useStoreDialog();

	useEffect(() => {
		if (userSession.profile == null) {
			setDisplayDialog(true);
			setHeaderMessage('¿Primera vez en PIBE?');
			setMessageDialog(
				'¡Bienvenido!. Al ser esta tu primera vez en PIBE, deberás ingresar todos tus datos personales y laborales en tu perfil para poder acceder a todas las funcionalidades del sistema.',
			);
		}
	}, []);

	return (
		<div>
			<NavBarApp />
			<DialogApp />
		</div>
	);
};
