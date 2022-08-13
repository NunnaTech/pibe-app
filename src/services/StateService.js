import { getApiUrl } from './ConfigApi';

export class StateService {
	GetStates(token) {
		return fetch(getApiUrl("api/v1/pibe/states"), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}
}