import { getApiUrl } from './ConfigApi';

export class VacantService {

	GetGeneralVacants(token) {
		if (token){
			return fetch(getApiUrl("api/v1/pibe/vacants"), {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
		}else{
			return fetch(getApiUrl("api/v1/pibe/vacants"))
		}

	}

	GetUserVacants(token, username){
		return fetch(getApiUrl(`api/v1/pibe/user-vacants/${username}/vacants`), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}

	GetUserVacantsFavorites(token, username){
		return fetch(getApiUrl(`api/v1/pibe/users/favorite/vacants/${username}`), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}

	GetUsersByVacant(token, id) {
		return fetch(getApiUrl(`api/v1/pibe/user-vacants/${id}/users`), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}

	ChangeProcessVacant(token, id, username, process) {
		return fetch(getApiUrl(`api/v1/pibe/user-vacants/${id}/${username}`), {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-type': 'application/json',
			},
			body: JSON.stringify(process),
		})
	}

	AddNewVacant(token, vacant) {
		return fetch(getApiUrl(`api/v1/pibe/vacants`), {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-type': 'application/json',
			},
			body: JSON.stringify(vacant),
		})
	}

	UpdateVacant(token, vacant) {
		return fetch(getApiUrl(`api/v1/pibe/vacants`), {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-type': 'application/json',
			},
			body: JSON.stringify(vacant),
		})
	}

	DeleteVacant(token, id) {
		return fetch(getApiUrl(`api/v1/pibe/vacants/${id}`), {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-type': 'application/json',
			},
		})
	}

	GetOne(token, id) {
		return fetch(getApiUrl(`api/v1/pibe/vacants/${id}`), {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-type': 'application/json',
			},
		})
	}

}