import { getApiUrl } from './ConfigApi';

export class VacantDetailService {

	GetInfoVacant(id,token){
		return fetch(getApiUrl(`api/v1/pibe/vacants/${id}`), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	GetCreatorVacant(username,token){
		return fetch(getApiUrl(`api/v1/pibe/user/${username}`), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	SaveFavoriteVacant(username,id,token){
		return fetch(getApiUrl(`api/v1/pibe/users/favorite/vacants/${username}/${id}`),{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}

	SaveToApplicantVacant(id,username,token){
		return fetch(getApiUrl(`api/v1/pibe/user-vacants/${id}/${username}`),{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}

	GetAllUserContacts(username, token){
		return fetch(getApiUrl(`api/v1/pibe/contacts/${username}`),{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}

}