import { NavBarApp } from '../../navbar/NavBarApp';
import { CardData } from '../applicants_grid/ApplicantsCard';
import { PaginatorData } from '../../paginator_data/PaginatorData';
import { VacantService } from '../../../services/VacantService';
import { useParams } from 'react-router-dom';
import { DataFilterComponent } from './DataFilterComponent';
import { useStoreSession } from '../../../storage/LoginZustand';
import { useStoreHomeCandidates } from '../../../storage/HomeCandidateZustand';

import React, { useEffect, useState } from 'react';

export const DataViewHome = () => {
	const { page, setPage, setTotalPag } = useStoreHomeCandidates();

	const [usersVacants, setUsersVacants] = useState([]);
	const [wordFiltering, setWordFiltering] = useState([]);

	const [filter, setFilter] = useState([]);
	const index = (page - 1) * 6;

	const vacantServive = new VacantService();
	const { token } = useStoreSession();
	const { id, title } = useParams();

	useEffect(() => {
		if (wordFiltering.length === '') {
			setFilter(usersVacants.slice(index, index + 6));
		}
	}, [wordFiltering]);

	useEffect(() => {
		setFilter(usersVacants.slice(index, index + 6));
		setPage(Math.ceil(usersVacants.length / 6));
	}, [usersVacants]);

	useEffect(() => {
		setFilter(usersVacants.slice(index, index + 6));
	}, [page]);

	useEffect(() => {
		vacantServive
			.GetUsersByVacant(token, id)
			.then((data) => data.json())
			.then((data) => setUsersVacants(data))
			.catch((err) => console.log(err));
	}, []);

	const filteringData = (word = '') => {
		setFilter(
			usersVacants.filter(
				(w) =>
					w.user.profile.name.toLowerCase().indexOf(word.toLowerCase()) > -1 ||
					w.process.name.toLowerCase().indexOf(word.toLowerCase()) > -1,
			),
		);
	};

	return (
		<div>
			<NavBarApp />
			<div className='mt-5 text-center text-5xl font-bold'>
				Mis candidatos de la vacante: {title}
			</div>
			<div className=''>
				<div className='grid gap-4 p-5'>
					<DataFilterComponent
						wordFiltering={wordFiltering}
						setWordFiltering={setWordFiltering}
						filteringData={filteringData}
					/>
					{filter.length !== 0 ? (
						filter.map((e, i) => (
							<div
								className='col-12 md:col-6 lg:col-4'
								key={i}>
								<CardData
									key={i}
									data={e}
								/>
							</div>
						))
					) : (
						<div className='w-full text-center font-bold text-xl'>No se encontraron coincidencias</div>
					)}
				</div>
			</div>
			<div className='flex justify-content-center flex-wrap card-container pb-6'>
				<PaginatorData />
			</div>
		</div>
	);
};
