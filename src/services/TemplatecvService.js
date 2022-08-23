import { getApiUrl } from './ConfigApi';

export class TemplatecvService {

    getResumeUser(token, username) {
		return fetch(getApiUrl(`api/v1/pibe/user/${username}/resume`), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	saveTemplate(username, token, resume, template) {
		return fetch(getApiUrl(`/api/v1/pibe/user/${username}/resume/style/${id}`), {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-type': 'application/json',
			},
			body: JSON.stringify(template),
		});
	}
}

