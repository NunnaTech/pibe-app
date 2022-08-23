import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useStoreDialog } from '../../storage/DialogZustand';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useStoreSession } from '../../storage/LoginZustand';

export const DialogApp = () => {
	let navigate = useNavigate();
	const { message, displayDialog, headerMessage, setDisplayDialog,setHeaderMessage,setMessageDialog } = useStoreDialog();
	const {userSession} = useStoreSession()

	useEffect(()=>{
		if (!userSession.profile){
			setDisplayDialog(true)
			setHeaderMessage("¡Hola!")
			setMessageDialog("Parece que es la primera vez que inicias sesión, registra todos " +
				"tus datos en tu perfil para poder disfrutar de todas la ventajas que PIBE tiene para ti.")
		}
	},[])

	const renderFooter = () => {
		return (
			<div>
				<Button
					label='Ir al perfil'
					onClick={() => navigate('/profile')}
					className='p-button-text'
				/>
			</div>
		);
	};
	return (
		<>
			<Dialog
				header={headerMessage}
				closable={false}
				draggable={false}
				visible={displayDialog}
				style={{ width: '50vw' }}
				footer={renderFooter}>
				<p>{message}</p>
			</Dialog>
		</>
	);
};
