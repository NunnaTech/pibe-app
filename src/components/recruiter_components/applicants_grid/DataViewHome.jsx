import { NavBarApp } from '../../navbar/NavBarApp';
import { CardData } from '../applicants_grid/ApplicantsCard';
import { PaginatorData } from '../../paginator_data/PaginatorData';
import { VacantService } from '../../../services/VacantService';
import { useParams } from 'react-router-dom';
import { useStoreSession } from '../../../storage/LoginZustand';
import React, { useEffect, useState } from 'react';

export const DataViewHome = () => {
	const [usersVacants, setUsersVacants] = useState([]);
	const vacantServive = new VacantService();
	const { token } = useStoreSession();
	const { id, title } = useParams();

	useEffect(() => {
		vacantServive
			.GetUsersByVacant(token, id)
			.then((data) => data.json())
			.then((data) => setUsersVacants(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<NavBarApp />
			<div className='mt-5 text-center text-5xl font-bold'>
				Mis candidatos de la vacante: {title}
			</div>
			<div className=''>
				<div className='grid gap-4 p-5'>
					{usersVacants.map((e, i) => (
						<div
							className='col-12 md:col-6 lg:col-4'
							key={i}>
							<CardData
								key={i}
								data={e}
							/>
						</div>
					))}
				</div>
			</div>
			<div className='flex justify-content-center flex-wrap card-container pb-6'>
				<PaginatorData />
			</div>
		</div>
	);
};
