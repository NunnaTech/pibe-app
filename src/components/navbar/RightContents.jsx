import { Button } from 'primereact/button';

export const RightContents = () => {
  return(
		<>
			<Button style={{color:"white"}} icon={<span className="material-icons">notifications</span>}
							className="p-button-rounded p-button-text p-button-plain" aria-label="Profile" />
			<Button style={{color:"white"}} icon={<span className="material-icons">account_circle</span>}
							className="p-button-rounded p-button-text p-button-plain" aria-label="Profile" />
		</>
	)
}