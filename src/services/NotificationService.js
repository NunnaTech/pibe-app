import { getApiUrl } from './ConfigApi';

export class NotificationService {

	GetAllNotifications(token,username){
		return fetch(getApiUrl(`api/v1/pibe/users/${username}/notifications`),{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}

}