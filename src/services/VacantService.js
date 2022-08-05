import { getApiUrl } from './ConfigApi';

export class VacantService {
	GetGeneralVacants(token){
		 return fetch(getApiUrl("api/v1/pibe/vacants"),{
			 headers: {
				 Authorization: `Bearer ${token}`,
			 },
		 })
	}
}