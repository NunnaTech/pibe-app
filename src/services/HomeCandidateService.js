import { getApiUrl } from './ConfigApi';

export class HomeCandidateService {
	getAllRepublicStates(token) {
		return fetch(getApiUrl('api/v1/pibe/states'), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
}
