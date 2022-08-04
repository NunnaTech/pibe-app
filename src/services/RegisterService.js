import { getApiUrl } from './ConfigApi';

export class RegisterService {
	RegisterUser(userName, email, password, role) {
		return fetch(getApiUrl('api/v1/pibe/auth/register'), {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				username: userName,
				email: email,
				password: password,
				roleId: role,
			}),
		});
	}
}
