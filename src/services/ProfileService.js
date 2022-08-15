import { getApiUrl } from './ConfigApi';

export class ProfileService {

	getAllRepublicStates(token) {
		return fetch(getApiUrl('api/v1/pibe/states'), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	getProfileUser(token, username) {
		return fetch(getApiUrl(`api/v1/pibe/user/${username}/profile`), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	}

	updateProfile(token, id, profile, email) {
		return fetch(getApiUrl(`api/v1/pibe/user/${id}`), {
			method: 'PATCH',
			body: JSON.stringify({
				profile,
			}),
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/json',
				'Content-Type': 'application/json;charset=utf-8',
			},
		});
	}

	saveProfile(userName, profile, token) {
		return fetch(getApiUrl(`api/v1/pibe/user/${userName}/profile`), {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				birthDate: `${profile.birthDate}`,
				completed: profile.completed,
				firstName: profile.firstName,
				gender: profile.gender,
				id: 0,
				image: profile.image,
				name: profile.name,
				phoneNumber: profile.phoneNumber,
				position: profile.position,
				secondName: profile.secondName,
				state: {
					id: profile.state.id,
					name: profile.state.name,
				},
			}),
		});
	}


}
