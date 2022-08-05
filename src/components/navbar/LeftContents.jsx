import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const LeftContents = () => {

	let navigate = useNavigate();
	const goToHome = () => {
		navigate('/candidate');
	};

  return(
		<>
			<Button label="INICIO" onClick={goToHome} icon={<span style={{marginRight:5}} className="material-icons">home</span>}
							iconPos="left" style={{color:"white"}} className="p-button-text p-button-plain" />
			<Button label="MIS POSTULACIONES"  icon={<span style={{marginRight:5}} className="material-icons">apartment</span>}
							iconPos="left" style={{color:"white"}} className="p-button-text p-button-plain" />
		</>
	)
}