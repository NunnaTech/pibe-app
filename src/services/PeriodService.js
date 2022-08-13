import { getApiUrl } from './ConfigApi';

export class PeriodService {
	GetPeriods(token) {
		return fetch(getApiUrl("api/v1/pibe/periods"), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}
}