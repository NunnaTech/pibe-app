import { getApiUrl } from './ConfigApi';

export class TemplatecvService {

    getResumeUser(token, username) {
		return fetch(getApiUrl(`api/v1/pibe/user/${username}/resume`), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
}

