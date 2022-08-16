import DateService from '../../../services/DateService';

export const CardContent = ({ obj }) => {
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
			<div className='flex '>
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
		</div>
	);
};
