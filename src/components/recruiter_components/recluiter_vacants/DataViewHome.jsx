import { DataFilterComponent } from './DataFilterComponent';
import { NavBarApp } from '../../navbar/NavBarApp';
import { CardData } from './CardData';
import { PaginatorData } from '../../paginator_data/PaginatorData';
import { useEffect } from 'react';
import { HomeRecluiterService } from '../../../services/HomeRecluiterServices';
import { useStoreSession } from '../../../storage/LoginZustand';
import { useStoreHomeCandidates } from '../../../storage/HomeCandidateZustand';

export const DataViewHome = () => {
	let vacantServive = new HomeRecluiterService();
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
	const { token, userSession } = useStoreSession();
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

	useEffect(() => {
		setTotalPag(Math.ceil(normalData.length / 6));
	}, [normalData]);

	useEffect(() => {
		getAllVacants();
	}, []);

	const getAllVacants = () => {
		vacantServive
			.getAllVacantsByUser(token, userSession.username)
			.then((res) => res.json())
			.then((data) => {
				setFilterData(data.slice(startIndex, startIndex + 6));
				setNormalData(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		setFilterData(normalData.slice(startIndex, startIndex + 6));
	}, [page]);

	return (
		<>
			<div className='surface-50 h-auto pb-8'>
				<NavBarApp />
				<div className='bg-light-primary shadow-7 lg:mx-8 my-6 pt-1 px-2 lg:px-8'>
					<div className='flex my-3 col-12'>
						<div className='flex align-content-center flex-wrap  mr-3 '>
							<span className='material-icons text-6xl border-circle p-3 text-primary btn-light-primary'>
								work
							</span>
						</div>
						<div className=' lg:text-3xl font-light line-height-3'>
							<p className='font-bold my-0 text-primary'>
								Mis vacantes publicadas
							</p>
							<span className='font-normal text-gray-700'>
								A continuación, se muestran tus vacantes publicadas
							</span>
						</div>
					</div>
					<div className='flex justify-content-center flex-wrap card-container mt-5 '>
						<DataFilterComponent filtering={filterItems} />
					</div>
					{filterData.length !== 0 ? (
						<>
							<div className='flex justify-content-center flex-wrap card-container py-4'>
								<div className='grid container flex justify-content-center'>
									{filterData.map((obj, index) => {
										return (
											<CardData
												obj={obj}
												key={index}
												getAllVacants={getAllVacants}
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
								Sin vacantes publicadas
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
