import LeftContent from '../../components/login_components/LeftContent';
import RightContent from '../../components/login_components/RightContent';

const Login = () => {
	return (
		<div className='h-screen w-screen flex justify-content-center align-content-center' style={{background:'#EAF3FB'}}>
			<div className="grid card shadow-4 m-6 w-8 border-round-md" style={{background:'#104292'}}>
				<div className="sm:col-12 md:w-6 md:col-6 lg:col-3 bg-white border-round-md">
					<LeftContent/>
				</div>
				<div className="sm:col-12 md:w-6 md:col-6 lg:col-3 p-5">
					<RightContent/>
				</div>
			</div>
		</div>
	);
};

export default Login;

