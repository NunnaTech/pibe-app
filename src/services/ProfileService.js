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
		});
	}

	getResumeUser(token, username) {
		return fetch(getApiUrl(`api/v1/pibe/user/${username}/resume`), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	updateProfile(token, username, profile) {
		return fetch(getApiUrl(`api/v1/pibe/user/${username}/profile`), {
			method: 'PUT',
			body: JSON.stringify({
				birthDate: `${profile.birthDate}T00:00:00`,
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
				birthDate: `${profile.birthDate}T00:00:00`,
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

	getUserContacts(username, token) {
		return fetch(getApiUrl(`api/v1/pibe/contacts/${username}`), {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-type': 'application/json',
			},
		});
	}

	getAllUsers(token) {
		return fetch(getApiUrl('api/v1/pibe/user/'), {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-type': 'application/json',
			},
		});
	}

	saveContact(token, myusername, contactusername) {
		return fetch(
			getApiUrl(`api/v1/pibe/contacts/${myusername}/${contactusername}`),
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}

	saveResumeUser(username, token, resume) {
		return fetch(getApiUrl(`api/v1/pibe/user/${username}/resume`), {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-type': 'application/json',
			},
			body: JSON.stringify(resume),
		});
	}

	saveTemplate(username, token, resume, template) {
		return fetch(getApiUrl(`api/v1/pibe/user/${username}/resume`), {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-type': 'application/json',
			},
			body: JSON.stringify(template),
		});
	}
}
