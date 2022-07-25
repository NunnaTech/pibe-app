import {useStoreSession} from '../storage/LoginZustand';

export const CandidatePage = () => {
	const { userSession,token} = useStoreSession();

  return(
		<div>
			Bienvenido {userSession.profile.firstName}
			<div>
				El token es {token}
			</div>
		</div>
	)
}