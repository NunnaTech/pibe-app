import { DataFilterComponent } from './DataFilterComponent';
import { NavBarApp } from '../../navbar/NavBarApp';
import { CardData } from './CardData';
import { PaginatorData } from '../../paginator_data/PaginatorData';
import { useEffect } from 'react';
import { VacantService } from '../../../services/VacantService';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useStoreSession } from '../../../storage/LoginZustand';
import { useStoreHomeCandidates } from '../../../storage/HomeCandidateZustand';
import { DialogApp } from '../../dialogs/DialogApp';
import { useParams } from 'react-router-dom';

export const DataViewHome = () => {
	// API Service
	let vacantServive = new VacantService();
	// React Router Params
	let params = useParams()
	const objProcess = {"process": { "id": 0, "name": "" }}
	// Zustand States
	const { page, setPage, filterData, setFilterData, normalData, setNormalData, option
		, setTotalPag, filteringWord, opcRouter
	} = useStoreHomeCandidates();
	const { token, userSession } = useStoreSession();

	// Pagination
	const startIndex = (page - 1) * 3;


	const filterItems = (query) => {
		switch (option.id) {
			case 1:
				setFilterData(
					normalData.filter(
						(obj) =>
							obj.state.name.toLowerCase().indexOf(query.toLowerCase()) > -1,
					),
				);
				break;
			case 2:
				setFilterData(
					normalData.filter(
						(obj) =>
							obj.mode.name.toLowerCase().indexOf(query.toLowerCase()) > -1,
					),
				);
				break;
			case 3:
				setFilterData(
					normalData.filter(
						(obj) => obj.title.toLowerCase().indexOf(query.toLowerCase()) > -1,
					),
				);
				break;
			default:
				setFilterData(
					normalData.filter(
						(obj) =>
							obj.state.name.toLowerCase().indexOf(query.toLowerCase()) > -1,
					),
				);
				break;
		}
	};

	useEffect(()=>{
		if (filteringWord === '')
			setFilterData(normalData.slice(startIndex, startIndex + 3))
	},[filteringWord])

	useEffect(() => {
		setTotalPag(Math.ceil(normalData.length / 3));
		setFilterData(normalData.slice(startIndex, startIndex + 3));
	}, [normalData]);

	useEffect(() => {
		setPage(1)
		setNormalData([])

		switch (params.opc) {
			case "home":
				vacantServive
					.GetGeneralVacants(token)
					.then((res) => res.json())
					.then((data) => {
						setNormalData(data);
					})
					.catch((error) => {
						console.log(error);
					});
				break;
			case "favorites":
				vacantServive.GetUserVacantsFavorites(token,userSession.username)
					.then((res) => res.json())
					.then((data) => {
						setNormalData(data);
					})
					.catch((error) => {
						console.log(error);
					});
				break;
			case "jobs":
				let jobs = []
				vacantServive.GetUserVacants(token,userSession.username)
					.then((res) => res.json())
					.then((data) => {
						data.map((j,i)=>{
							jobs.push(j.vacant)
						})
						setNormalData(jobs);
					})
					.catch((error) => {
						console.log(error);
					});
				break;
		}
	}, [opcRouter]);

	useEffect(() => {
		setFilterData(normalData.slice(startIndex, startIndex + 3));
	}, [page]);

	return (
		<>
			<div className='h-max'>
				<NavBarApp />
				<DialogApp/>
				<div className='flex justify-content-center flex-wrap card-container mt-5'>
					<DataFilterComponent filtering={filterItems} />
				</div>

				{filterData.length != 0 ? (
					<>
						<div className='flex justify-content-center flex-wrap card-container pl-8 pr-8 pt-4 pb-4'>
							<div className='grid container flex justify-content-center'>
								{filterData.map((obj, index) => {
									return (
										<div key={index}>
											<CardData
												obj={obj}
											/>
										</div>
									);
								})}
							</div>
						</div>

						<div className='flex justify-content-center flex-wrap card-container pb-6'>
							<PaginatorData />
						</div>
					</>
				) : (
					<>
						<div className='flex justify-content-center flex-wrap card-container pl-8 pr-8 pt-4 pb-4'>
							<div className='justify-content-center font-bold text-xl'>
								<ProgressSpinner />
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};
