import LeftContentLogin from '../../components/login_components/LeftContentLogin';
import RightContentLogin from '../../components/login_components/RightContentLogin';
import { Button } from 'primereact/button';

export const Login = () => {
	return (
		<div className='h-auto w-auto flex flex-column'>
			<div className='flex align-items-center justify-content-center mt-6'>
				<div className="grid card shadow-4 m-6 w-8 border-round-md" style={{background:'#104292'}}>
					<div className="sm:col-12 md:w-6 md:col-6 lg:col-3 bg-white border-round-md">
						<LeftContentLogin/>
					</div>
					<div className="sm:col-12 md:w-6 md:col-6 lg:col-3 p-5">
						<RightContentLogin/>
					</div>
				</div>
			</div>
			<div className="flex align-items-center justify-content-center mb-8" style={{marginTop:-20}}>
				<div className='font-medium'>¿Aún no eres miembro de PIBE?</div>
				<Button label="Registrarse" className="p-button-text ml-3"/>
			</div>
		</div>
	);
};

