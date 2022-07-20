import { Button } from 'primereact/button';

export const LeftContents = () => {
  return(
		<>
			<Button label="INICIO"  icon={<span style={{marginRight:5}} className="material-icons">home</span>}
							iconPos="left" style={{color:"white"}} className="p-button-text p-button-plain" />
			<Button label="MIS POSTULACIONES"  icon={<span style={{marginRight:5}} className="material-icons">apartment</span>}
							iconPos="left" style={{color:"white"}} className="p-button-text p-button-plain" />
		</>
	)
}