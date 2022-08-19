import { getApiUrl } from './ConfigApi';

export class BeneftisService {
	GetSchedules(token) {
		return fetch(getApiUrl("api/v1/pibe/benefits"), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}
}