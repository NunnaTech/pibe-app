import LoginImg from '../../img/Login.svg';

const RightContentLogin = () => {
  return(
		<div className="flex flex-column">
			<div
				className="flex justify-content-center">
				<img src={LoginImg} className="w-8"/>
			</div>
		</div>
	)
}

export default RightContentLogin;