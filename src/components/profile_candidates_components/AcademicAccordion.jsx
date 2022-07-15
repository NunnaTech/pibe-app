import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const AcademicAccordion = () => {
  return(
		<div className="grid container flex">
			<div className="flex sm:justify-content-center md:justify-content-start  sm:col-12 md:col-6">
				<InputText id='in' placeholder="DB Administrator" className="w-full h-max"/>
			</div>
			<div className="flex justify-content-end sm:col-12 md:col-6 mt-1">
				<Button icon={<span className='material-icons m-0'>save</span>}  className="p-button-rounded p-button-secondary" aria-label="Save" />
			</div>
		</div>
	)
}