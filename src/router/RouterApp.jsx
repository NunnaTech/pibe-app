import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/login/Login';
import { Register } from '../pages/register/Register';
import { useStoreSession } from '../storage/LoginZustand';
import { HomeCandidates } from '../pages/candidates/HomeCandidates';
import { ProfileCandidates } from '../pages/candidates/ProfileCandidates';
import { ApplicantProfile } from '../pages/recruiter/ApplicantProfile';
import { HomeRecruiter } from '../pages/recruiter/HomeRecruiter';
import { CandidatesInVacant } from '../pages/recruiter/CandidatesInVacant';
import { AddVacant } from '../pages/recruiter/AddVacant';
import { EditVacant } from '../pages/recruiter/EditVacant';
import { CandidatesVacantDetails } from '../pages/candidates/CandidatesVacantDetails';

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
				<Route
					path='/login'
					element={<Login />}
				/>
				{userSession.authorities[0].authority === 'ROLE_RECRUITER' && (
					<>
						<Route
							path='recruiter'
							element={<HomeRecruiter />}
						/>
						<Route
							path='applicant-profile'
							element={<ApplicantProfile />}
						/>
						<Route
							path='add-vacant'
							element={<AddVacant />}
						/>
						<Route
							path='edit-vacant/:id'
							element={<EditVacant />}
						/>
						<Route
							path='profile'
							element={<ProfileCandidates />}
						/>
						<Route
							path='/vacant/:id/:title/candidates'
							element={<CandidatesInVacant />}
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
							path='vacant/:vacantId'
							element={<CandidatesVacantDetails />}
						/>
						<Route
							path='profile'
							element={<ProfileCandidates />}
						/>
						<Route
							path='profile/:user'
							element={<ApplicantProfile />}
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
