import { getApiUrl } from './ConfigApi';

export class ModeService {
	GetModes(token) {
		return fetch(getApiUrl("api/v1/pibe/modes"), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}
}