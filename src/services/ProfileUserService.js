import { getApiUrl } from './ConfigApi';

export class ProfileUserService {

	getResumeInfoUser(username,token){
		return fetch(getApiUrl(`api/v1/pibe/user/${username}/resume`),{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}

	getUserByUsername(username, token){
		return fetch(getApiUrl(`api/v1/pibe/user/${username}`),{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}

}