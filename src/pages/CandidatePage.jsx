import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useStoreSession} from '../storage/LoginZustand';

export const CandidatePage = () => {
	const { userSession,token} = useStoreSession();
	let navigate = useNavigate();

	useEffect(()=>{
		if(userSession.profile == null){
			
		}
	},[])

  return(
		<div>
			Hola
		</div>
	)
}