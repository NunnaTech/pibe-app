import { DataFilterComponent } from './DataFilterComponent';
import { NavBarApp } from '../../navbar/NavBarApp';
import { CardData } from './CardData';
import { PaginatorData } from '../../paginator_data/PaginatorData';
import { useEffect } from 'react';
import { VacantService } from '../../../services/VacantService';
import { useStoreSession } from '../../../storage/LoginZustand';
import { useStoreHomeCandidates } from '../../../storage/HomeCandidateZustand';

export const DataViewHome = () => {
	// API Service
	let vacantServive = new VacantService();
	// Zustand States
	const {
		page,
		setPage,
		filterData,
		setFilterData,
		normalData,
		setNormalData,
		option,
		totalPag,
		setTotalPag,
	} = useStoreHomeCandidates();
	const { token } = useStoreSession();
	// Pagination
	const startIndex = (page - 1) * 6;

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
		setTotalPag(Math.ceil(normalData.length / 6));
	},[normalData])

	useEffect(() => {
		let num =
		vacantServive
			.GetGeneralVacants(token)
			.then((res) => res.json())
			.then((data) => {
				setFilterData(data.slice(startIndex, startIndex + 6));
				setNormalData(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		setFilterData(normalData.slice(startIndex, startIndex + 6));
	}, [page]);

	return (
		<>
			<div className='h-max'>
				<NavBarApp />

				<div className='flex justify-content-center flex-wrap card-container mt-5'>
					<DataFilterComponent filtering={filterItems} />
				</div>

				<div className='flex justify-content-center flex-wrap card-container pl-8 pr-8 pt-4 pb-4'>
					<div className='grid container flex justify-content-center'>
						{filterData.map((obj, index) => {
							return (
								<CardData
									obj={obj}
									key={index}
								/>
							);
						})}
					</div>
				</div>

				<div className='flex justify-content-center flex-wrap card-container pb-6'>
					<PaginatorData />
				</div>
			</div>
		</>
	);
};
