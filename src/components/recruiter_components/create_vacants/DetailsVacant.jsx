import { Dropdown } from 'primereact/dropdown';
import { useStoreSession } from '../../../storage/LoginZustand';
import { ScheduleService } from '../../../services/ScheduleService';
import { ModeService } from '../../../services/ModeService';
import { PeriodService } from '../../../services/PeriodService';
import { StateService } from '../../../services/StateService';

import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';

export const DetailsVacant = ({
	vacant,
	setVacant,
	setBtnDisabled,
	btnDisabled,
}) => {
	const { token } = useStoreSession();
	const scheduleService = new ScheduleService();
	const modeService = new ModeService();
	const periodService = new PeriodService();
	const stateService = new StateService();
	const [schedules, setSchedules] = useState(null);
	const [modes, setModes] = useState([]);
	const [periods, setPeriods] = useState([]);
	const [states, setStates] = useState([]);

	useEffect(() => {
		if (
			vacant.schedule.id !== 0 &&
			vacant.mode.id !== 0 &&
			vacant.period.id !== 0 &&
			vacant.state.id !== 0
		) {
			setBtnDisabled(btnDisabled && false);
		} else {
			setBtnDisabled(true);
		}
	}, [vacant]);

	useEffect(() => {
		scheduleService
			.GetSchedules(token)
			.then((data) => data.json())
			.then((data) => setSchedules(data))
			.catch((err) => console.log(err));

		modeService
			.GetModes(token)
			.then((data) => data.json())
			.then((data) => setModes(data))
			.catch((err) => console.log(err));

		periodService
			.GetPeriods(token)
			.then((data) => data.json())
			.then((data) => setPeriods(data))
			.catch((err) => console.log(err));

		stateService
			.GetStates(token)
			.then((data) => data.json())
			.then((data) => setStates(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<h5 className='mt-0 text-pink-400 text-base'>Detalles de vacante</h5>
			<div className='grid p-fluid'>
				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span className='material-icons p-inputgroup-addon'>schedule</span>
						<span className='p-float-label'>
							<span className='p-float-label'>
								<Dropdown
									inputId='dropdown'
									optionLabel='name'
									placeholder='Horario'
									className={classNames({
										'p-invalid': vacant.schedule.id === 0,
									})}
									options={schedules}
									value={vacant.schedule}
									onChange={(e) => setVacant({ ...vacant, schedule: e.value })}
								/>
								<label htmlFor='dropdown'>Horario</label>
							</span>
						</span>
					</div>
					{vacant.schedule.id === 0 && (
						<small className='p-error'>Campo obligatorio</small>
					)}
				</div>
				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span className='material-icons p-inputgroup-addon'>
							currency_exchange
						</span>
						<span className='p-float-label'>
							<span className='p-float-label'>
								<Dropdown
									inputId='dropdown'
									optionLabel='name'
									options={periods}
									className={classNames({
										'p-invalid': vacant.period.id === 0,
									})}
									placeholder='Periodo'
									value={vacant.period}
									onChange={(e) => setVacant({ ...vacant, period: e.value })}
								/>
								<label htmlFor='dropdown'>Periodo</label>
							</span>
						</span>
					</div>
					{vacant.period.id === 0 && (
						<small className='p-error'>Campo obligatorio</small>
					)}
				</div>
			</div>
			<div className='grid p-fluid'>
				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span className='material-icons p-inputgroup-addon'>work</span>
						<span className='p-float-label'>
							<span className='p-float-label'>
								<Dropdown
									inputId='dropdown'
									optionLabel='name'
									options={modes}
									placeholder='Modo'
									className={classNames({
										'p-invalid': vacant.mode.id === 0,
									})}
									value={vacant.mode}
									onChange={(e) => setVacant({ ...vacant, mode: e.value })}
								/>
								<label htmlFor='dropdown'>Modo</label>
							</span>
						</span>
					</div>
					{vacant.mode.id === 0 && (
						<small className='p-error'>Campo obligatorio</small>
					)}
				</div>

				<div className='field col-12 sm:col-6'>
					<div className='p-inputgroup'>
						<span className='material-icons p-inputgroup-addon'>apartment</span>
						<span className='p-float-label'>
							<span className='p-float-label'>
								<Dropdown
									inputId='dropdown'
									optionLabel='name'
									options={states}
									placeholder='Estado'
									className={classNames({
										'p-invalid': vacant.state.id === 0,
									})}
									value={vacant.state}
									onChange={(e) => setVacant({ ...vacant, state: e.value })}
								/>
								<label htmlFor='dropdown'>Estado</label>
							</span>
						</span>
					</div>
					{vacant.state.id === 0 && (
						<small className='p-error'>Campo obligatorio</small>
					)}
				</div>
			</div>
		</div>
	);
};
