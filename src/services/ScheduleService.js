import { getApiUrl } from './ConfigApi';

export class ScheduleService {
	GetSchedules(token) {
		return fetch(getApiUrl("api/v1/pibe/schedules"), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}
}