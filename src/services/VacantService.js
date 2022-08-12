import { getApiUrl } from './ConfigApi';

export class VacantService {
	GetGeneralVacants(token) {
		return fetch(getApiUrl("api/v1/pibe/vacants"), {
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
}