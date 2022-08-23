import DateService from '../../../services/DateService';
import React, { useEffect, useState } from 'react';
import { useStoreHomeCandidates } from '../../../storage/HomeCandidateZustand';
import { VacantService } from '../../../services/VacantService';
import { useStoreSession } from '../../../storage/LoginZustand';
import { useParams } from 'react-router-dom';

export const CardContent = ({obj}) => {
	let params = useParams()
	const [normalData,setNormalData] = useState(null)
	const [proc,setProc] = useState(null)
	const {token,userSession} = useStoreSession()
	const {opcRouter} = useStoreHomeCandidates()
	const vacantService = new VacantService()

	useEffect(()=>{
		if (normalData!=null){
			let search = normalData.find(o => o.vacant.name == obj.name)
			setProc(search)
		}
	},[normalData])

	useEffect(()=>{
		if (opcRouter=="jobs" || params.opc == "jobs"){
			vacantService.GetUserVacants(token,userSession.username)
				.then((res) => res.json())
				.then((data) => {
					setNormalData(data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	},[])

	return (
		<div className='pl-1 height-max'>
			<div className='flex'>
				<div className='flex my-3 col-6'>
					<div className=' flex align-content-center flex-wrap  mr-3 '>
						<span className='material-icons text-2xl border-circle p-3 text-primary btn-light-primary'>
							attach_money
						</span>
					</div>
					<div className='text-base font-light line-height-3'>
						<p className='font-bold my-0 text-primary'>Salario</p>
						<span className='font-normal text-gray-700'>{obj.salary}</span>
					</div>
				</div>

				<div className='flex my-3 col-6'>
					<div className='flex align-content-center flex-wrap mr-3 '>
						<span className='material-icons text-2xl border-circle p-3 text-blue-500 bg-blue-100'>
							calendar_today
						</span>
					</div>
					<div className='text-base font-light line-height-3'>
						<p className='font-bold my-0 text-blue-500'>Vigencia</p>
						<span className='font-normal text-gray-700'>
							{' '}
							{DateService.parseToDate(obj.endDate)}
						</span>
					</div>
				</div>
			</div>

			<div className='flex'>
				<div className='flex my-3 col-6'>
					<div className='flex align-content-center flex-wrap mr-3 '>
						<span className='material-icons text-2xl border-circle p-3 bg-yellow-100 text-yellow-500'>
							work
						</span>
					</div>
					<div className='text-base font-light line-height-3'>
						<p className='font-bold my-0 text-yellow-500'>Modalidad</p>
						<span className='font-normal text-gray-700'>{obj.mode.name}</span>
					</div>
				</div>
				<div className='flex my-3 col-6'>
					<div className='flex align-content-center flex-wrap mr-3 '>
						<span className='material-icons text-2xl border-circle p-3 text-teal-500 bg-teal-100'>
							apartment
						</span>
					</div>
					<div className='text-base font-light line-height-3'>
						<p className='font-bold my-0 text-teal-500'>Estado</p>
						<span className='font-normal text-gray-700'>{obj.state.name}</span>
					</div>
				</div>
			</div>

			{normalData != null && proc != null && (
				<div className="grid flex justify-content-center">
					<div className='font-bold text-lg text-teal-500 bg-teal-100  border-round-lg p-2 flex'>
						Proceso: <div className="font-light ml-2">{proc.process.name}</div>
					</div>
				</div>
			)}

		</div>
	);
};
