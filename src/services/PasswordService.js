import { getApiUrl } from './ConfigApi';

export class PasswordService {
	ForgotPassword(email) {
		return fetch(getApiUrl('api/v1/pibe/auth/forgot-password'), {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
			}),
		});
	}
	ResetPassword(code,password) {
		return fetch(getApiUrl('api/v1/pibe/auth/reset-password'), {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				key: code,
				newPassword:password,
			}),
		});
	}
}