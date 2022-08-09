import { getApiUrl } from './ConfigApi';

export class HomeRecluiterService{
	getAllVacantsByUser(token, username) {
		return fetch(getApiUrl(`api/v1/pibe/vacants/users/${username}`), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
}
