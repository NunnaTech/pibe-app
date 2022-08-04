import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/login/Login';
import { Register } from '../pages/register/Register';
import { useStoreSession } from '../storage/LoginZustand';
import { HomeCandidates } from '../pages/candidates/HomeCandidates';
import { RecruiterPage } from '../pages/RecruiterPage';
import { ProfileCandidates } from '../pages/candidates/ProfileCandidates';

export const RouterApp = () => {
	const { userSession } = useStoreSession();

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Login />}
				/>
				<Route
					path='register'
					element={<Register />}
				/>
				{userSession.authorities[0].authority === 'ROLE_RECRUITER' && (
					<>
						<Route
							path='recruiter'
							element={<RecruiterPage />}
						/>
					</>
				)}
				{userSession.authorities[0].authority === 'ROLE_CANDIDATE' && (
					<>
						<Route
							path='candidate'
							element={<HomeCandidates />}
						/>
						<Route
							path='profile'
							element={<ProfileCandidates />}
						/>
					</>
				)}
				<Route
					path='*'
					element={<Login />}
				/>
			</Routes>
		</BrowserRouter>
	);
};
