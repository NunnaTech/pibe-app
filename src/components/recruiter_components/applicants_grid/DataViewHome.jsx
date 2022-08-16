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
		getUsersByVacant();
	}, []);

	const getUsersByVacant = () => {
		vacantServive
			.GetUsersByVacant(token, id)
			.then((data) => data.json())
			.then((data) => setUsersVacants(data))
			.catch((err) => console.log(err));
	};

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
		<div className='surface-50 h-auto pb-8'>
			<NavBarApp />
			<div className='bg-light-primary shadow-7 lg:mx-8 my-6 pt-1 px-2 lg:px-8'>
				<div className='flex my-3 col-12'>
					<div className=' flex align-content-center flex-wrap  mr-3 '>
						<span className='material-icons text-6xl border-circle p-3 text-primary btn-light-primary'>
							groups
						</span>
					</div>
					<div className='lg:text-3xl font-light line-height-3'>
						<p className='font-bold my-0 text-primary'>
							Candidatos postulados en
						</p>
						<span className='font-normal text-gray-700'> {title}</span>
					</div>
				</div>
				<div className='flex justify-content-center flex-wrap card-container mt-5 '>
					<DataFilterComponent
						wordFiltering={wordFiltering}
						setWordFiltering={setWordFiltering}
						filteringData={filteringData}
					/>
				</div>
				{filter.length !== 0 ? (
					<>
						<div className='flex justify-content-center flex-wrap card-container py-4'>
							<div className='grid container flex justify-content-center'>
								{filter.map((e, i) => {
									return (
										<CardData
											key={i}
											data={e}
											getUsersByVacant={getUsersByVacant}
										/>
									);
								})}
							</div>
						</div>
						<div className='flex justify-content-center flex-wrap card-container pb-6'>
							<PaginatorData />
						</div>
					</>
				) : (
					<div className='flex justify-content-center flex-wrap card-container pl-8 pr-8 pt-4 pb-4'>
						<div className='justify-content-center font-bold font-bold text-2xl text-gray-700 my-5'>
							Sin postulantes registrados
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
