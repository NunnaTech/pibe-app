import { Chips } from 'primereact/chips';
import { classNames } from 'primereact/utils';
import React, { useState, useEffect } from 'react';

export const BenefitsVacant = ({
	vacant,
	setVacant,
	setBtnDisabled,
	btnDisabled,
}) => {
	const [benefits, setBenefits] = useState([]);

	useEffect(() => {
			setBenefits(vacant.benefits.map((i) => i.name));
	}, []);

	useEffect(() => {
		setVacant({
			...vacant,
			benefits: benefits.map((b) => {
				let obj = { name: b };
				return obj;
			}),
		});
	}, [benefits]);

	useEffect(() => {
		if (benefits.length !== 0) {
			setBtnDisabled(btnDisabled && false);
		} else {
			setBtnDisabled(true);
		}
	}, [vacant]);

	return (
		<div>
			<h5 className='mt-0 text-pink-400 text-base'>
				Beneficios de la vacante (sepáralos con una coma){' '}
			</h5>
			<div className='grid p-fluid'>
				<div className='field col-12 '>
					<div className='p-inputgroup'>
						<span className='material-icons p-inputgroup-addon text-primary'>
							auto_awesome
						</span>
						<span className='p-float-label'>
							<span className='p-float-label'>
								<Chips
									value={benefits}
									className={classNames({ 'p-invalid': benefits.length === 0 })}
									onChange={(e) => setBenefits(e.value)}
									separator=','
								/>
								<label htmlFor='dropdown'>Beneficios</label>
							</span>
						</span>
					</div>
					{benefits.length === 0 && (
						<small className='p-error'>Coloca al menos un beneficio</small>
					)}
				</div>
			</div>
		</div>
	);
};
