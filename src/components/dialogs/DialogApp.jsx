import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useStoreDialog } from '../../storage/DialogZustand';
import { useNavigate } from 'react-router-dom';

export const DialogApp = () => {
	let navigate = useNavigate();
	const { message, displayDialog, headerMessage } = useStoreDialog();
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
